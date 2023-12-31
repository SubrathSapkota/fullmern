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
const PORT = 4000;
const cors = require("cors");


// link the router file
// app.use(require("./router/auth"));

// const middleware = (req, res, next) => {
//   console.log("Middle Ware");
//   next();
// };
// middleware();

app.use(cors());
app.use(express.json());


const authRouter = require("./router/auth");
const messageRouter = require("./router/message");

app.use("/", authRouter);
app.use("/", messageRouter);

// app.get("/", (req, res) => {
//   res.send("Hello Home page 1");
// });
// app.get("/about", (req, res) => {
//   res.send("Hello About page");
// });

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
