const Message = require('../models/messageModel')

exports.getMessageList = (req, res, next) => {
  console.log('Méthode getMessageList appelé')

  Message.find()
    .then((list) => res.status(200).json(list))
    .catch((err) => {
      console.log(err)
      res.status(404).json({ message: 'NOT FOUND' })
    })
}

exports.createMessage = (req, res, next) => {
  console.log('Methode createMessage appelé')

  const message = new Message({
    content: req.body.content,
    senderId: 1,
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
