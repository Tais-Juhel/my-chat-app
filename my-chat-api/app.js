const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const compression = require('compression')
// const jwt = require('jsonwebtoken');

const app = express()
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())

//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Email'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

const DB = 'mongodb://127.0.0.1:27017/my-chat?retryWrites=true&w=majority'
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.log('MongoDB ERROR MESSAGE:', err)
  })

const messageRoutes = require('./routes/messageRoutes')

app.use('/api/message/', messageRoutes)

module.exports = app
