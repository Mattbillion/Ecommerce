const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 2021;
app.use(cors());
app.use(bodyParser.json());

app.get("/products", (request, response) => {
  console.log("GET products huselt orj irlee");
  response.json(products);
});

app.get("/product/:id", (request, response) => {
  const prodId = request.params.id;
  const foundProduct = products.find((product) => product.id === prodId);
  if (foundProduct) {
    response.json(foundProduct);
  } else {
    response.status(404).send({ message: "Product not found" });
  }
});

app.post("/product/add", (request, response) => {
  console.log("POST husel orj irlee request: ", request.body);
  fs.readFile("./Data/product.json", (err, data) => {
    if (err) {
      response.status(500).send({ message: err });
    } else {
      const products = JSON.parse(data);
      products.push(request.body);
      fs.writeFile("./Data/products.json", JSON.stringify(products), (err) => {
        if (err) {
          response.status(500).send({ message: err });
        } else {
          response.status(200).send({ message: "Product added successfully" });
        }
      });
    }
  });
});

app.get("/users", (request, response) => {
  console.log("GET products husel orj irlee");
  response.send("1");
  response.status(200).send("products sent");
});

app.delete("/product/:id", (req, res) => {
  const id = req.params.id;
  console.log("DELETE husel orj irlee id: ", id);
});

app.listen(port, () => {
  console.log(`Server is starting in ${port} port`);
});

let products = [
  { id: "1", name: "Iphone 15", price: 100 },
  { id: "2", name: "Iphone 13", price: 120 },
];
