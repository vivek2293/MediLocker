const express = require('express')
const router = express.Router()

const {
  CreateTask,
  getTask,

} = require('../controllers/tasks')

const{
  CreateTaskDR,
  getTaskdr,
  CreateReport,
  getTaskReport
}= require('../controllers/taskdoc')


const{
  SendOTP
}= require('../nodemailer.js')

router.route('/').post(CreateTask)

router.route('/report').post(CreateReport).get(getTaskReport)

router.route('/login').post(getTask)

router.route('/signup/dr').post(CreateTaskDR)

router.route('/login/dr').post(getTaskdr)

router.route('/signup/otp').post(SendOTP)

module.exports = router