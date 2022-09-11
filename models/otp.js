const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
  otp: {
    type:String,
  },
  email: {
    type:String,
  },
})

module.exports = mongoose.model('Otp', OTPSchema)
