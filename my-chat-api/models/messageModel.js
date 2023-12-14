const mongoose = require('mongoose')

const MessageModel = mongoose.Schema({
  content: { type: String, required: true },
  senderId: { type: Number, require: true },
  chatId: { type: Number, required: true },
  creationDate: { type: Date, required: false },
  modificationDate: { type: Date, required: false },
  active: { type: Boolean, required: false },
})

module.exports = mongoose.model('Message', MessageModel)
