import express from "express";
const router = express.Router();
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const JWT_SECRET = "yeahBuddy";
import { body, validationResult } from "express-validator";

router.post(
  "/signin",
  [
    body("email", "Please enter an valid email").isEmail(),
    body("password", "password should be minimum 8 characters long").isLength({
      min: 8,
    }),
    body("cpassword", "Passwords do not matched").custom((value, { req }) => {
      if (value == req.body.password) {
        return true;
      }
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ result: "Unsuccessfull", error: "Passwords do not matched" });
    }
    try {
      const flag = await User.findOne({ email: req.body.email });
      if (flag) {
        return res
          .status(400)
          .json({ result: "Unsuccessfull", error: "User already exist" });
      }
      const salt = await bcrypt.genSalt();
      const secPass = await bcrypt.hash(req.body.password, salt);
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: { id: user._id },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({ result: "Successfull", authToken });
    } catch (error) {
      res.status(500).json({
        result: "Unsuccessfull",
        error: "Some internal server error occured",
      });
    }
  }
);

router.post(
  "/login",
  [
    body("email", "enter an valid email").isEmail(),
    body("password", "password should not be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ result: "Unsuccessfull", errors: errors.array() });
    }
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
      if (!user) {
        res.status(400).json({
          result: "Unsuccessfull",
          error: "please check email or password",
        });
      }
      const validatePass = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validatePass) {
        res.status(400).json({
          result: "Unsuccessful",
          error: "Please check your password",
        });
      }
      const data = {
        user: { id: user._id },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({ result: "Successfull", authToken });
    } catch (error) {
      res.status(500).json({
        result: "Unsuccessfull",
        error: "some internal server error occured",
      });
    }
  }
);

export default router;
