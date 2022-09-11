const nodemailer = require("nodemailer");
const Otp = require("./models/otp");
const Taskdoc = require("./models/Taskdoc.js");
const asyncWrapper = require("./middleware/async");
const { createCustomError } = require("./errors/custom-error");
const bcrypt = require("bcrypt");

const SendOTP = asyncWrapper(async (req, res, next) => {
  const check = await Taskdoc.findOne({ email: req.body.email });
  console.log(check);
  console.log("Hello");
  if (check) {
    return next(createCustomError(`Email id already present`, 404));
  }
  const transporter = nodemailer.createTransport({
    host: "outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "medicare4476@outlook.com",
      pass: "mayur9898",
    },
    tls: { ciphers: "SSLv3" },
    service: "Outlook365",
  });
  const app = Math.floor(Math.random() * 1000000).toString();
  console.log(app);
  const Create = async () => {
    try {
      const otphash = await bcrypt.hash(`${app}`, 10);
      console.log(otphash);
      hashedOTP(otphash);
    } catch (err) {
      console.log(err);
    }
  };
  Create();
  // const otphash = await bcrypt.hash(app, 10)
  const options = {
    from: "medicare4476@outlook.com",
    to: `${req.body.email}`,
    subject: "OTP FOR VERIFICATION",
    text: `${app}`,
  };

  const hashedOTP = async (otphash) => {
    const response = await Otp.create({ otp: otphash, email: req.body.email });
    console.log("OTP SENT: ", response);
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent" + info.response);
  });
  res.status(200).send({ msg: "ok" });
});

module.exports = { SendOTP };
