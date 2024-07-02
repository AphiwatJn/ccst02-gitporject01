const express = require('express')
require('dotenv').config()
const notFound = require('./middlewares/not-found')
const errorMw = require('./middlewares/error-mw')
const app = express()
const todoRoute = require('./routes/todo-route')


app.use('/todo',todoRoute)
const port = process.env.PORT || 9999
app.use(notFound)
app.use(errorMw)

app.listen(port, ()=>console.log('server running',port))