// import "dotenv/config"; //dotenv configuratoin checked - works
// import fetch from "node-fetch";
const apiKey =
  "037c7144f6166d569c05556d4af373dfe290ba5576ac13f526050269289ac24a";
// process.env.API_KEY;

//node.js for requesting data from ambee api
//this code comes in full from the ambee website api documentation, from the forecast section
// const http = require("https");

async function getData(place) {
  // return new Promise((resolve, reject) => {
  const url = `https://api.ambeedata.com/latest/pollen/by-place?place=${encodeURIComponent(
    place
  )}`;
  const options = {
    // method: "GET",
    // hostname: "api.ambeedata.com",
    // port: null,
    //check for the place for format string. Take from user input.

    headers: {
      "x-api-key": apiKey,
      "Content-type": "application/json",
    },
  };

  // const req = http.request(options, function (res) {
  //   const chunks = [];

  //   res.on("data", function (chunk) {
  //     chunks.push(chunk);
  //   });

  //   res.on("end", function () {
  //     const body = Buffer.concat(chunks);
  //     resolve(body.toString());
  //   });
  // });

  // req.on("error", (err) => {
  //   reject(err);
  // });

  // req.end();
  //end of the api request node.js

  //this was a server side request with the use on node.js, it would need a more complicated server setup
  // fetch(url, options)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     resolve(data);
  //   })
  //   .catch((error) => {
  //     reject(error);
  //   });
  // });
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
export { getData };
