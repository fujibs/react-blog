const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require('bcrypt');
const { validate } = require("../models/User.js");

//REGISTER
router.post("/register", async (req,res)=>{
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      displayName: req.body.displayName,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user)
  } catch(err){
    res.status(500).json("Email is already in use");
  }
});

//LOGIN
router.post("/login", async(req,res)=>{
  try {
    const user = await User.findOne({email: req.body.email})
    if(!user) {
      return res.status(400).json("The email or password is incorrect");
    }

    const validated = await bcrypt.compare(req.body.password, user.password)
      if(!validated) {
        return res.status(400).json("The email or password is incorrect");
      }

      const { password, ...others } = user._doc;
      res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;