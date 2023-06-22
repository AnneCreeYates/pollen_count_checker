const express = require("express");
const apiData = require("./apiData");
//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for reqiests
app.listen(3000);

//middleware & static files
app.use(express.static("public"));
//takes the encoded data and passess that to the object that can be used on the request object
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  
  res.render("index", { title: "Home" });
});

//is supposed to receive the data from an API using a place parameter
app.post("/", (req,res) => {
  const place = req.body.place;
  console.log(place);
  apiData.getData(place)
    .then((response) => {
      //data variable goes deeper into the response array of objects, if other elements on the same level are necessary check console.log(response)
      const data = response.data;
      console.log(data[0])
      res.render("index", { title: "Home", data: data });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send("An error occured");
    })
    
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
