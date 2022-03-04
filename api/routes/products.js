const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Get to /products",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Post to /products",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  res.status(201).json({
    message: "Handling Get to /products/productId",
    id: id,
  });
});

router.patch("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Patch to /products/productId",
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Delete to /products/productId",
  });
});

module.exports = router;
