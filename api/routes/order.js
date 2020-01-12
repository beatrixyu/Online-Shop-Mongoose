const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET request to /order"
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: "POST request to /order",
    order: order
  });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: "you pass an ID",
    id: id
  });
});

router.patch("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "order update!"
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: "order delete!"
  });
});

module.exports = router;
