const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World From Node API");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@backendbd.gdurnfr.mongodb.net/NODE-CRUD-API?retryWrites=true&w=majority&appName=BackendBD"
  )
  .then(() => {
    console.log("Connect to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection faild!");
  });
