const { restart } = require("nodemon");
const Contact = require("../models/Contact");

const getAllContactController = (req, res, next) => {
  Contact.find().then((result) => {
    res
      .status(200)
      .json({
        message: "Get Data ",
        result,
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something Error from your server",
          error: err.message,
        });
      });
  });
};

const postAllContactController = (req, res, next) => {
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
    .catch((err) => console.log(err.message));
};

const getSingleContactController = (req, res, next) => {
  let id = req.params.id;
  Contact.findById(id)
    .then((result) => {
      res.status(200).json({
        message: "Get Contact By Single Id",
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error from your server",
        error: err.message,
      });
    });
};

const deleteContactController = (req, res, next) => {
  let id = req.params.id;
  Contact.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        message: "Contact successfully Deleted",
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error from your server",
        error: err.message,
      });
    });
};

const editContactController = (req, res, next) => {
  let id = req.params.id;
  let updateContact = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  };
  Contact.findByIdAndUpdate(id, { $set: updateContact })
    .then((result) => {
      Contact.findById(contact._id).then((newContact) => {
        res.status(205).json({
          message: "Your Contact Updated Now",
          result,
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error from your server",
        error: err.message,
      });
    });
};

module.exports = {
  getAllContactController,
  postAllContactController,
  getSingleContactController,
  deleteContactController,
  editContactController,
};
