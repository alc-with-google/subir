import express from 'express'; // Use Express
import bodyParser from "body-parser"; // Use body-parser
import chalk from 'chalk';

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


// Init the server
const server = app.listen(process.env.PORT || port, function(err){
  if (err){
      console.log(chalk.red(err));
  } else {
      var port = server.address().port;
      console.log(chalk.green("App now running on port", port));
  }
});

/*  "/api/status"
    GET: Get server status
 */
app.get("/api/status", function (req, res) {
  res.status(200).json({ status: "UP" });
});



