const request = require("request");
const fs = require("fs");

const URL = process.argv[2];
const path = process.argv[3];

let bodyContents = "";
let length = "";

request(URL, (error, response, body) => {

  if(error) { // only print error if there is an error
    console.log("error:", error);
  }

  bodyContents = body; // place data from body into global variable
  length = bodyContents.length.toString(); // place number of characters in body into global variable

  fs.writeFile(path, bodyContents, err => { // write contents pulled from given URL to a new file specified by path
    if(err) {
      console.error("error: ", err);
    }
  });

  console.log(`Downloaded and saved ${length} bytes to ${path}`);

});