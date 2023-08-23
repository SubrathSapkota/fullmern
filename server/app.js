const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/fullmern", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("No connection", e.message);
  });

//connection to mongodb ends

const express = require("express");
const app = express();
const PORT = 3000;

// link the router file
// app.use(require("./router/auth"));

// const middleware = (req, res, next) => {
//   console.log("Middle Ware");
//   next();
// };
// middleware();

app.use(express.json());

const authRouter = require("./router/auth");
app.use("/",  authRouter);

// app.get("/", (req, res) => {
//   res.send("Hello Home page 1");
// });
// app.get("/about", (req, res) => {
//   res.send("Hello About page");
// });

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
