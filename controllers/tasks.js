const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const Doc = require("../models/Doc");
const Otp = require('../models/otp')
const { createCustomError } = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#(&@!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

const CreateTask =asyncWrapper(async (req, res, next) => {
  const task1 = await Otp.findOne({ email:req.body.email }).lean()
  console.log("Console log from backend 'CreateTask'\n" + task1)
  if (!await bcrypt.compare(req.body.otp, task1.otp)){
		return next(createCustomError(`Invalid OTP`, 404))
  }else{
    const Del= await Otp.findOneAndDelete({ email:req.body.email })
    res.json({ Del })
    const { name, email, password: plainTextPassword } = req.body
    const password = await bcrypt.hash(plainTextPassword, 10)
    console.log(password) 
    const Create = async() => {
      try{
        const response = await Task.create({
          name,
          email,
          password
        })
        console.log('User created successfully: ', response)
      }
      catch(err){
        console.log(err);
      }
    }
    Create();
    res.json({ status: 'ok' })
    }
})


const getTask = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body
  console.log(req.body);
  const task = await Task.findOne({ email }).lean()
  console.log(task)
  if (!task) {
    return next(createCustomError(`Wrong Username/Password`, 404))
  }
  console.log(task.password)

  if (await bcrypt.compare(password, task.password)){
		const token = jwt.sign(
			{
				id: task._id,
				email: task.eamil,
				name: task.name
			},
			JWT_SECRET
		)
    console.log(token)
    return res.json({ status: 'ok', data: token , task})
  }
})

const getReport = asyncWrapper(async (req, res, next) => {
  console.log(req.body);
  console.log({ Patemail: req.body.Patemail })

    
    const task = await Doc.find({ Patemail: req.body.Patemail })

  if (!task) {
    return next(createCustomError(`No task with id :}`, 404))
  }
  res.status(200).json({ task })
})


module.exports = {
  CreateTask,
  getTask,
  getReport
}