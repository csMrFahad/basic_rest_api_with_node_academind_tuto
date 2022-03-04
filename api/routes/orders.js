const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Get to /orders",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Handling Post to /orders",
    order: order,
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: "Handling Post to /orders/orderId",
    id: id,
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "Handling Delete to /orders/orderId",
    orderId: req.params.orderId,
  });
});

module.exports = router;
