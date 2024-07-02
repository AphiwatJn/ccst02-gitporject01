const express = require('express')
const notFound = require('./middlewares/not-found')
const app = express()

const port = process.env.PORT || 8000
app.use(notFound)

app.listen(port, ()=>console.log('server running',port))