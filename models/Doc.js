const mongoose = require("mongoose");

const DocSchema = new mongoose.Schema({

    
  Patname: {
    type: String,
    required: [true, "must provide Patname"],
    trim: true,
  },    


  Patemail: {
    type: String,
    required: [true, "must provide email"],
    trim: true,
  },



  Docname: {
    type: String,
    required: [true, "must provide Docname"],
    trim: true,
  },


  Docid: {
    type: number,
    required: [true, "must provide Docname"],
    trim: true,
  },



  Hosname: {
    type: String,
    required: [true, "must provide Hosname"],
    trim: true,
  },



  Remarks: {
    type: String,
    required: [true, "must provide Remark"],
    trim: true,
  },


  URL: {
    type: String,
    required: [true, "must provide Remark"],
    trim: true,
  },


  Object: {
    type: Object,
    required: [true, "must provide Prescribed"],
    Prescription:{
      type: String,
      required: true,
    },
    Disease:{
      type: String,
      required: true,
    },
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
