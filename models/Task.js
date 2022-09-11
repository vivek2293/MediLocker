const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name(s)"],
    trim: true,
    maxlength: [1000, "name can not be more than 20 characters"],
  },

  email: {
    type: String,
    unique: true,
    required: [true, "must provide name(s)"],
    trim: true,
    maxlength: [1000, "name can not be more than 20 characters"],
  },

  password: {
    type: String,
    required: [true, "must provide purpose"],
    trim: true,
    minlength: [6, "min length should be 6 letters"],
    maxlength: [1000, "name can not be more than 20 characters"],
  },
});

module.exports = mongoose.model("Task", TaskSchema);
