const express = require("express");
const app = express();
const morgan = require("morgan"); //logging library;middleware
const bodyParser = require("body-parser");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));
//set true to work with rich data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "Options") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
