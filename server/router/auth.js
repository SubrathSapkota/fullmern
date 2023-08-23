const express = require("express");
const router = express.Router();

const User = require("../model/userSchema");

// router.get("/", (req, res, next) => {
//   res.send("HOME page router");
// });

// router.post("/register", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res
//       .status(422)
//       .json({ error: "Please fill all the required fields" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email already Exists!!" });
//       }
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User register successfully..." });
//         })
//         .catch((err) => {
//           console.log(err);
//           res.status(500).json({ error: "Failed to register!!" });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// async await -----------------------------------------
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "Please fill all the required fields" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already Exists!!" });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    const userRegister = await user.save();

    res.status(201).json({ message: "User register successfully..." });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
