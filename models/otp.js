const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({
  otp: {
    type:Number,
  },
})

module.exports = mongoose.model('Otp', OTPSchema)
