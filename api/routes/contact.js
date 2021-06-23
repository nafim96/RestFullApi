const express = require("express");
const router = express.Router();

const contact = [];

// Get
router.get("/", (req, res, next) => {
  res.send(contact);
});

router.post("/", (req, res, next) => {
  contact.push({
    name: req.body.name,
    email: req.body.email,
  });
  res.status(201).json({
    message: "Data Saved",
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.json({
    id,
  });
});

router.put("/:id", (req, res, next) => {
  res.json({
    message: "I am a PUT URL",
  });
});

router.delete("/:id", (req, res, next) => {
  res.json({
    message: "I am a Delete URL",
  });
});

module.exports = router;
