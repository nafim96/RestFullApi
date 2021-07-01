const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contacts");

// Get Method
router.get("/", contactController.getAllContactController);

//Post Method
router.post("/", contactController.postAllContactController);

// Get single data by Id method
router.get("/:id", contactController.getSingleContactController);

router.put("/:id", contactController.editContactController);

// Delete Method
router.delete("/:id", contactController.deleteContactController);

module.exports = router;
