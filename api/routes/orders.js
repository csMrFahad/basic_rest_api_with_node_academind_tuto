const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling Get to /orders",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling Post to /orders",
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
