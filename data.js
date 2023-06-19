//the data retrieving works fine - at the moment the data results are printed to the console

import "dotenv/config"; //dotenv configuratoin checked - works
import fetch from "node-fetch";

const apiKey = process.env.API_KEY;

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
        console.dir(data, { depth: null });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// console.log(getData("London"));
export { getData };
