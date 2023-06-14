import { getData } from "./data.js";

const location = document.getElementById("userInput_loc");
// const pollenPara = document.getElementById("pollenInfo");
console.log(location.value);

location.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const data = await getData(location.value);
    console.log(data);
  }
});
