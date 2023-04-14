const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

require('dotenv').config()
const port = process.env.PORT || 8000

const foods = require('./routes/foods.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/foods', foods)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
