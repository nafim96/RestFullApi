const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRound = 10;

const getUserController = (req, res, next) => {
  User.find()
    .then((user) => {
      res.status(200).json({
        message: "Get all user",
        user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error from your server",
        error: err.message,
      });
    });
};

// create new user
const registerUserController = (req, res, next) => {
  const password = req.body.password;
  const email = req.body.email;

  bcrypt.hash(password, saltRound, (err, hash) => {
    if (err) {
      res.json({
        error: err.message,
      });
    } else {
      const user = new User({
        email,
        password: hash,
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            message: "New User Created Successfully",
            result,
            originalPassword: password,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Something Error from your server",
            error: err.message,
          });
        });
    }
  });
};

// login user
const loginUserController = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.json({
            message: "Authentication Wrong",
          });
        }
        if (result) {
          res.json({
            message: "Login Successfully Done",
          });
        } else {
          res.json({
            message: "Login Failed Password Don't Match",
          });
        }
      });
    } else {
      res.json({
        message: "Authentication Failed",
      });
    }
  });
};

module.exports = {
  getUserController,
  registerUserController,
  loginUserController,
};
