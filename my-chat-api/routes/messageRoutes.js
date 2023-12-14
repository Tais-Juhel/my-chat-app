const express = require('express')
const router = express.Router()

// Import middelwares

// Import controllers
const messageCtrl = require('../controllers/messageController')

// Routes
router.get('/', messageCtrl.getMessageList)
router.post('/', messageCtrl.createMessage)

module.exports = router
