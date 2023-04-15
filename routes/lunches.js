const express = require('express')
const router = express.Router()

const lunchData = [
  {
    id: 1,
    makan_siang: [
      {
        nama: 'Daging Dada Ayam',
        kalori: 99,
        unit: '60 gram',
      },
      {
        nama: 'Ikan Gabus',
        kalori: 80,
        unit: '90 gram',
      },
      {
        nama: 'Nasi Putih',
        kalori: 57,
        unit: '45 gram',
      },
      {
        nama: 'Margarin',
        kalori: 22,
        unit: '4 gram',
      },
      {
        nama: 'Labu Siam',
        kalori: 34,
        unit: '200 gram',
      },
      {
        nama: 'Ikan Teri',
        kalori: 11,
        unit: '5 gram',
      },
      {
        nama: 'Sambal Pete',
        kalori: 22,
        unit: '10 gram',
      },
      {
        nama: 'Telur',
        kalori: 65,
        unit: '1 Butir',
      },
      {
        nama: 'Wortel',
        kalori: 4,
        unit: '10 gram',
      },
    ],
    foto: 'https://scontent-sin6-1.cdninstagram.com/v/t51.2885-15/267084334_333638431595527_3161918115289184499_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sin6-1.cdninstagram.com&_nc_cat=107&_nc_ohc=QSrw1MaFgTQAX_0tbZl&edm=AJqaXLUBAAAA&ccb=7-5&ig_cache_key=MjcyNjgyMjQ5MzcwMjQ1NzA4Nw%3D%3D.2-ccb7-5&oh=00_AfCoWaQ9Vh0U4t8puydbry7UlZkoq1MQs7vWI8HUbameXQ&oe=643E8631&_nc_sid=22239a',
  },
]

router.get('/lunches', (req, res) => {
  res.send(lunchData)
})

module.exports = router
