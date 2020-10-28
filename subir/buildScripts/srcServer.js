import express from 'express'; // Use Express
import bodyParser from "body-parser"; // Use body-parser
import mongodb from "mongodb"; // Use MongoDB
import chalk from 'chalk';

const ObjectID = mongodb.ObjectID; // Use MongoDB

// The database variable
let database;
// The products collection
const PRODUCTS_COLLECTION = "products";

const port = 8080;

// Create new instance of the express server
const app = express();

// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
// TODO: How does this dist folder work?
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Local database URI.
const LOCAL_DATABASE = "mongodb://localhost:27017/app";
// Local port.
const LOCAL_PORT = 8080;

// Init the server
mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
  {
      useUnifiedTopology: true,
      useNewUrlParser: true,
  }, function (error, client) {

      // Check if there are any problems with the connection to MongoDB database.
      if (error) {
          console.log(error);
          process.exit(1);
      }

      // Save database object from the callback for reuse.
      database = client.db();
      console.log("Database connection done.");

      // Initialize the app.
      var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
          var port = server.address().port;
          console.log("App now running on port", port);
      });
  });

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
  res.status(200).json({ status: "UP" });
});

/*  "/api/products"
*  GET: finds all products
*/
app.get("/api/products", function (req, res) {
  database.collection(PRODUCTS_COLLECTION).find({}).toArray(function (error, data) {
      if (error) {
          manageError(res, err.message, "Failed to get contacts.");
      } else {
          res.status(200).json(data);
      }
  });
});

/*  "/api/products"
*   POST: creates a new product
*/
app.post("/api/products", function (req, res) {
  var product = req.body;
  console.log(req.body)

  if (!product.name) {
      manageError(res, "Invalid product input", "Name is very mandatory.", 400);
  } else if (!product.brand) {
      manageError(res, "Invalid product input", "Brand is mandatory.", 400);
  } else {
      database.collection(PRODUCTS_COLLECTION).insertOne(product, function (err, doc) {
          if (err) {
              manageError(res, err.message, "Failed to create new product.");
          } else {
              res.status(201).json(doc.ops[0]);
          }
      });
  }
});

/*  "/api/products/:id"
*   DELETE: deletes product by id
*/
app.delete("/api/products/:id", function (req, res) {
  if (req.params.id.length > 24 || req.params.id.length < 24) {
      manageError(res, "Invalid product id", "ID must be a single String of 12 bytes or a string of 24 hex characters.", 400);
  } else {
      database.collection(PRODUCTS_COLLECTION).deleteOne({ _id: new ObjectID(req.params.id) }, function (err, result) {
          if (err) {
              manageError(res, err.message, "Failed to delete product.");
          } else {
              res.status(200).json(req.params.id);
          }
      });
  }
});

/*  "/api/status"
    GET: Get server status
 */
app.get("/api/status", function (req, res) {
  res.status(200).json({ status: "UP" });
});

// Errors handler.
function manageError(res, reason, message, code) {
  console.log("Error: " + reason);
  res.status(code || 500).json({ "error": message });
}


