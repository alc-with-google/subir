import express from 'express';
import { join } from 'path';
import open from 'open';
// import webpack from 'webpack';
// import config from '../webpack.config.dev';

/*eslint-disable no-console */

const port = 3000;
const app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// }));

app.get ('/', function (req, res){
    res.sendFile(join(__dirname, '../src/indexcopy.html'));
});

// app.get('/users', function (req, res){
//     res.json([
//     {"id": 1, "firstName": "Matthew", "lastName":"oye", "email": "ml@gmail.com"},
//     {"id": 2, "firstName": "Cornel", "lastName":"okon", "email": "co@gmail.com"},
//     {"id": 3, "firstName": "Osita", "lastName":"Irene", "email": "oi@gmail.com"}
//     ]);
// });

app.listen(port, function(err){
    if (err){
        console.log(err);
    } else {
        open('http://localhost:' + port)
    }
});
