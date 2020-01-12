const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const morgan = require("morgan");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/product");
const orderRoutes = require("./api/routes/order");

mongoose.connect(
  "mongodb+srv://admin:dci123@cluster0-2istd.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

app.use(morgan("dev")); //GET / 404 10.708 ms - 33

//middleware function
app.use("/products", productRoutes);
app.use("orders", orderRoutes);

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "it works!"
  });
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

//handling error
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(PORT, () => {
  console.log(`it start at n\ http://localhost:${PORT}`);
});

module.exports = app;
