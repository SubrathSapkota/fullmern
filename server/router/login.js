const express = require("express");
const router = express.Router();

const User = require("../model/userSchema");

router.post("/signin", async (req, res) => {
  const { name, password } = res.body;
  console.log(name, password);

  if (!name || !password) {
    res.status(422).json({ message: "invalid credentials" });
  }
  try {
    const exists = new User.find({ email: email });

    if (exists) {
      res.status(200).json({ message: "successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
