const Taskdoc = require("../models/Taskdoc");
const Doc = require("../models/Doc");
const asyncWrapper = require("../middleware/async");
const Otp = require("../models/otp");
const { createCustomError } = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#(&@!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

const CreateTaskDR = asyncWrapper(async (req, res, next) => {
  const task1 = await Otp.findOne({ email: req.body.email }).lean();
  if (!(await bcrypt.compare(req.body.otp, task1.otp))) {
    return next(createCustomError(`Invalid OTP`, 404));
  } else {
    const Del = await Otp.findOneAndDelete({ email: req.body.email });
    res.json({ Del });
    const {
      name,
      email,
      password: plainTextPassword,
      docRegistration,
    } = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10);
    console.log(password);
    const Create = async () => {
      try {
        const response = await Taskdoc.create({
          name,
          email,
          password,
          docRegistration,
        });
        console.log("User created successfully: ", response);
      } catch (err) {
        console.log(err);
      }
    };
    Create();
    res.json({ status: "ok" });
  }
});


const getTaskdr = asyncWrapper(async (req, res, next) => {
  const { email, docRegistration, password } = req.body;
  console.log(req.body);
  const task = await Taskdoc.findOne({ email, docRegistration }).lean();
  console.log(task);
  if (!task) {
    return next(createCustomError(`Wrong Username/Password`, 404));
  }
  console.log(task.password);
  const check = await bcrypt.compare(password, task.password);
  console.log(check)
  if(check) {
    const token = jwt.sign(
      {
        id: task._id,
        name: task.name,
        docid: task.docRegistration,
      },
      JWT_SECRET
      );
      
      return res.json({ status: "ok", data: token, task });
    }
  });
  
  const getTaskReport = asyncWrapper(async (req, res, next) => {
    const task = await Doc.find({ Patemail: req.body.Patemail });
    if (!task) {
      return next(createCustomError(`No task with id :}`, 404));
    }
    res.status(200).json({ task });
  });


  
  const CreateReport = asyncWrapper(async (req, res) => {
  console.log(req.body);
  const task = await Doc.create(req.body);
  res.status(201).json({ task });
});

module.exports = {
  CreateTaskDR,
  getTaskdr,
  CreateReport,
  getTaskReport,
};
