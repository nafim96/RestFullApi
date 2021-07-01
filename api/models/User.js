const mongoose = require("mongoose");
const valid = require("validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  password: {
    type: String,
    minlength: 6,
    trim: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
