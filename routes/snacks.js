const express = require('express')
const router = express.Router()

const snackData = [
  {
    id: 1,
    cemilan: [
      {
        nama: 'Jambu Biji',
        kalori: 68,
        unit: '100 gram',
      },
      {
        nama: 'Coffe mocca 2in 1',
        kalori: 46,
        unit: '1 porsi 10 gram',
      },
    ],
    foto: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/265766022_487382882651498_4850210682552696589_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=o6FiMqkCmewAX9XUgVZ&edm=AJqaXLUBAAAA&ccb=7-5&ig_cache_key=MjcyNjgyMjQ5MzcyNzQ5ODkxNQ%3D%3D.2-ccb7-5&oh=00_AfCTUNhV5piGz7c3YpuuCSQ05h0AFmb54w5BCh3zkhj3lQ&oe=643EFF09&_nc_sid=22239a',
  },
]

router.get('/snacks', (req, res) => {
  res.send(snackData)
})

module.exports = router
