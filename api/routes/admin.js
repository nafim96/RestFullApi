const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

//Create Get Method
router.get("/", (req, res, next) => {
  Admin.find()
    .then((data) => {
      res.status(200).json({
        message: "Getting Admin Data",
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Authentication Field",
        err,
      });
    });
});

//Create Post Method
router.post("/", (req, res, next) => {
  const admin = new Admin({
    name: req.body.name,
    email: req.body.email,
  });
  admin
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Admin Added Successfully",
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Admin Creation Field",
      });
    });
});

module.exports = router;
