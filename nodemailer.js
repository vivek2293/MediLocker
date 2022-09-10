const nodemailer=require('nodemailer')
const Otp = require('./models/otp')
const Taskdoc= require('./models/Taskdoc.js')
const asyncWrapper = require('./middleware/async')
const { createCustomError } = require('./errors/custom-error')

const SendOTP =asyncWrapper(async (req, res, next) => {
    const check= await Taskdoc.findOne({ email:req.body.email })
    console.log(check)
    console.log("Hello")
    if(check){
        return next(createCustomError(`Email id already present`, 404))
    }
    const transporter= nodemailer.createTransport({
        service : "Gmail",
        auth :{
            user:"medicare44762@gmail.com",
            pass:"mrobtuacoebzhrfq"
        }
    })
    const app=Math.floor(Math.random()*1000000)
    const options={
        from :"medicare4476@gmail.com",
        to:`${req.body.email}`,
        subject:"OTP FOR VERIFICATION",
        text: `${app}`,
      }
      const response = await Otp.create( { otp : app } )
        console.log('OTP SENT: ', response)
    
    transporter.sendMail(options, function(err,info){
        if(err){
            console.log(err);
            return;
        }
        console.log("Sent" +info.response)
    })
    res.status(200).send({msg:"su"})
  })

module.exports = {SendOTP}
