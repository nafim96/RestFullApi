const mongoose = require("mongoose");
const valid = require("validator");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    validate: {
      validator: (v) => {
        return valid.isEmail(v);
      },
      message: `{VALUE} is not email`,
    },
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
