const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const Otp = require('../models/otp')
const { createCustomError } = require('../errors/custom-error')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const CreateTask =asyncWrapper(async (req, res, next) => {
  // const { otp } = req.body
  const task1 = await Otp.findOne({ email:req.body.email }).lean()
  console.log()
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
  const task = await Task.findOne({ email }).lean()
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
			process.env.JWT_SECRET
		)
    return res.json({ status: 'ok', data: token , task})
  }
})

const getReport = asyncWrapper(async (req, res, next) => {

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