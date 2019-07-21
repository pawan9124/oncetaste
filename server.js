const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const config = require("./webpack.config.js");
const compiler = webpack(config);

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/dist"));

//Tell express to use the webpack-dev-middleware and use the webpack.config.js
//configuration file as a base.

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/public/index.html"));
});

//Serve the files on port 3000.
app.listen(port, function() {
  console.log("Example app listening on port 3000:\n");
});
