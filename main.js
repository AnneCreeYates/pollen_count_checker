require("dotenv").config(); //dotenv configuratoin checked - works

const apiKey = process.env.API_KEY;

// const pollenPara = document.getElementById("pollenInfo");

const http = require("https");

const options = {
  method: "GET",
  hostname: "api.ambeedata.com",
  port: null,
  //check for the place for format string. Take from user input.
  path: "/forecast/pollen/by-place?place=Bengaluru",
  headers: {
    "x-api-key": apiKey,
    "Content-type": "application/json",
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
