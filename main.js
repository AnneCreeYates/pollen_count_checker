import { getData } from "./data.js";
import * as fs from "fs";
import * as http from "http";

//read a file (html, css) from the provided relative path and render it in the browser on port 3000
fs.readFile("./views/index.html", (err, html) => {
  if (err) {
    throw err;
  } //create http server and listen for requests to html and css files
  http
    .createServer((req, res) => {
      res.writeHeader(200, { "Content-type": "text/html" });
      res.write(html);
      res.end();
    })
    .listen(3000, () => {
      console.log("Listening for requests on port 3000");
    });
});

//listen for the Enter key in the input area in html to receive the location information

//use the location information in the data.js request for retrieving the pollen information
