const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const  router = express.Router();
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middlewares/authMiddleware')


router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newuser = new User(req.body);
    await newuser.save();
    console.log(newuser);

    res
      .status(200)
      .send({ message: "User created successfully", success: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Error creating user", success: false, error });
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({email:req.body.email})
    if (!user){
      return res.status(200).send({message:"User does not exist",success:false})
    }
    if (!req.body.password){
      return res.status(200).send({message:"Please enter the password",success:false})
    }
    const ismatch = await bcrypt.compare(req.body.password,user.password)
    if(!ismatch){
      return res.status(200).send({message:"Password does not match",success:false})
    }
    else{
      const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"}  )
      res.status(200).send({message:"Login Successful",success:true,data:token})
    }

  } catch (error) {
    console.log(error)
    res.status(500).send({message:"Login Error",success:false,error})

  }
});

router.post("/get-user-info-by-id",authMiddleware,async(req,res) => { 
  try {
    const user = await User.findOne({_id:req.body.userId})
    if(!user){
      return res.status(200).send({message:"User does not exist",success:false})
    }else{
      res.status(200).send({success:true,data:{name:user.name,email:user.email}})

    }
  } catch (error) {
      res.status(500).send({message:"Error getting user info",success:false})
  }
 })
module.exports = router;
