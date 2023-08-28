const express = require("express");
const router = express.Router();

const Contact = require("../model/contactSchema");

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res
      .status(422)
      .json({ error: "Please fill all the required fields" });
  }
  try {
    const contact = new Contact({
      name,
      email,
      phone,
      message,
    });

    await contact.save();

    res.status(201).json({ message: "User register successfully..." });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
