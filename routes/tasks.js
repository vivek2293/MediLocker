const express = require('express')
const router = express.Router()

const {
  CreateTask,
  getTask,
  getReport
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

router.route('/report/dr').post(CreateReport)

router.route('/report/patient').post(getTaskReport)

router.route('/user').post(getReport)

router.route('/login').post(getTask)

router.route('/signup/dr').post(CreateTaskDR)

router.route('/user/dr').post(getTaskdr)

router.route('/signup/otp').post(SendOTP)

module.exports = router
