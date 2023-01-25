const { request, response } = require('express');
const express = require('express');
const cors = require("cors")

const app = express();
const port = 2020;
app.use(cors());

// Back-end router #
app.get("/products", (req, res) => {
  console.log("GET product huselt orj irlee");
  res.json(products);
});

app.get("/users", (req, res) => {
  console.log("GET product huselt orj irlee");
  res.status(200).send("SUCCESS!!!");
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

const products = [
  
  {name: "Iphone 14", 
  price: 999,
  image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"}, 
  {name: "Iphone 13 Pro max", 
  price: 888,
  image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large.jpg"},
]
