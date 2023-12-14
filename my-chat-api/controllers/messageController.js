const Message = require('../models/messageModel')

exports.createMessage = (req, res, next) => {
  console.log('Methode createMessage appelé')

  const message = new Message({
    content: req.body.content,
    senderId: req.body.senderId,
    chatId: req.body.chatId,
    creationDate: new Date(),
    modificationDate: new Date(),
    active: true,
  })

  message
    .save()
    .then((saved) => res.status(200).json(saved))
    .catch(() =>
      res
        .status(500)
        .json({ message: 'API REST ERROR: Problème lors de la création' })
    )
}

exports.getMessageList = (req, res, next) => {
  console.log('Méthode getMessageList appelé')

  if (req.query.chatId) {
    Message.find({ chatId: req.query.chatId })
      .then((list) => res.status(200).json(list))
      .catch((err) => {
        console.log(err)
        res.status(404).json({ message: 'NOT FOUND' })
      })
  } else {
    Message.find()
      .then((list) => res.status(200).json(list))
      .catch((err) => {
        console.log(err)
        res.status(404).json({ message: 'NOT FOUND' })
      })
  }
}
