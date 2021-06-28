const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Get
router.get("/", (req, res, next) => {
  Contact.find()
    .then((result) => {
      res.status(200).json({
        message: "Data get Successfully",
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error Occured",
        error: err,
      });
    });
});

//Post Method
router.post("/", (req, res, next) => {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  contact
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Contact Added",
        contact: data,
      });
    })
    .catch((err) => console.log(err));
});

// this route don't working
router.get("/:id", (req, res, next) => {
  const id = req.body.id;
  Contact.findById({ _id: id }).then((result) => {
    res
      .status(200)
      .json({
        message: "Get Data By Id",
        result,
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something Error from your server",
          error: err,
        });
      });
  });
});

router.put("/:id", (req, res, next) => {
  res.json({
    message: "I am a PUT URL",
  });
});

// don't work this route
router.delete("/:id", (req, res, next) => {
  Contact.deleteMany()
    .then((data) => {
      res.status(202).json({
        message: "Data Deleted",
        data,
      });
    })
    .catch((err) => {
      res.status(204).json({
        message: "Data Deleted Field",
        error: err,
      });
    });
});

module.exports = router;
