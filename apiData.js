require("dotenv").config(); //dotenv configuratoin checked - works
//as require is not supported for this module it needs to by dynamic import()
let fetch;
import("node-fetch").then(module => {
  fetch = module.default;
});

const apiKey = process.env.API_KEY;

//function sends the request to the website using it's api and key with the purpose of retrieving the pollen data
async function getData(place) {
  const url = `https://api.ambeedata.com/latest/pollen/by-place?place=${encodeURIComponent(
    place
  )}`;
  const options = {
    headers: {
      "x-api-key": apiKey,
      "Content-type": "application/json",
    },
  };
  //this was a server side request with the use on node.js, it would need a more complicated server setup
  const responseHandlingPromise = new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
  //return promise
  return responseHandlingPromise;
}
module.exports = { getData };
