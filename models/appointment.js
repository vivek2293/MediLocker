const mongoose = require("mongoose");

const DocSchema = new mongoose.Schema({
    
  name: {
    type:String,
    required: true,
    trim: true,
  },    


  email: {
    type:String,
    required: true,
    trim: true,
  },    


  remarks: {
    type: String,
    required: true,
    trim: true,
  },



  Date: {
    type: String,
    default:(new Date()).toLocaleDateString()
  },



  Time: {
    type: String,
    default:(new Date()).toLocaleTimeString()
  },
});

module.exports = mongoose.model("Doc", DocSchema);
