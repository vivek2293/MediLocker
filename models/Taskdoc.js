const mongoose = require("mongoose");

const DocSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name(s)"],
    trim: true,
    maxlength: [1000, "name can not be more than 20 characters"],
  },
  docRegistration: {
    type: Number,
    required: [true, "must provide Doctor Id"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "must provide email"],
    trim: true,
    // validate: {
    //   validator: validator.isEmail,
    //   message: "{VALUE} is not a valid email",
    //   isAsync: false,
    // },
  },
  password: {
    type: String,
    required: [true, "must provide password"],
    trim: true,
    minlength: [6, "min length should be 6 letters"],
    maxlength: [1000, "name can not be more than 20 characters"],
  },
});

module.exports = mongoose.model("DocSchema", DocSchema);
