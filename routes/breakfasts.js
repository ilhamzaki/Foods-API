const express = require('express')
const router = express.Router()

const breakfastData = [
  {
    id: 1,
    sarapan: [
      {
        nama: 'Telur Rebus',
        kalori: 130,
        unit: '2 Butir',
      },
      {
        nama: 'Ubi Jalar (tanpa kulit, Dimasak, Direbus)',
        kalori: 76,
        unit: '100 gram',
      },
      {
        nama: 'Kelapa Kering',
        kalori: 33,
        unit: '5 gram',
      },
      {
        nama: 'Coffe mocca 2in 1',
        kalori: 46,
        unit: '1 porsi 10 gram',
      },
    ],
    foto: 'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/264957227_637528183935515_3305040986604915991_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=RbGSBt7j9TcAX-iGWk-&edm=AJqaXLUBAAAA&ccb=7-5&ig_cache_key=MjcyNTI5MzkzNDg5NzQyNTE5OA%3D%3D.2-ccb7-5&oh=00_AfCStX0xbabCLBVhr9D94b9qpNU5PEiy3vIPKiUPqFoZwQ&oe=643F9BA4&_nc_sid=22239a',
  },
  {
    id: 2,
    sarapan: [
      {
        nama: 'Roti Gandum Panggang',
        kalori: 86,
        unit: '31 gram',
      },
      {
        nama: 'Keju cheddar',
        kalori: 40,
        unit: '10 gram',
      },
      {
        nama: 'Telur Rebus',
        kalori: 65,
        unit: '1 Butir',
      },
      {
        nama: 'Coffe mocca 2in 1',
        kalori: 46,
        unit: '1 porsi 10 gram',
      },
    ],
    foto: 'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/272874743_498930081575707_4869141998994908823_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=IcngFxsUfx0AX_qnmHM&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc2MDA3NjMxMDc4ODY5ODM4OQ%3D%3D.2-ccb7-5&oh=00_AfBkPImNK3vH7j0YoQPIBaR3ovksQTIqjU9sSj0Pwpei_g&oe=643F8ABD&_nc_sid=6136e7',
  },
  {
    id: 2,
    sarapan: [
      {
        nama: 'Ubi Ungu Rebus',
        kalori: 107,
        unit: '130 gram',
      },
      {
        nama: 'Keju cheddar',
        kalori: 60,
        unit: '15 gram',
      },
      {
        nama: 'Telur Rebus',
        kalori: 130,
        unit: '2 Butir',
      },
      {
        nama: 'Coffe mocca 2in 1',
        kalori: 46,
        unit: '1 porsi 10 gram',
      },
    ],
    foto: 'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/272066398_100373265872545_1151546152733269169_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=101&_nc_ohc=0POxxWfSL2kAX8EfNa2&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc1NDMxOTY0MDk3NDYxNTQwNw%3D%3D.2-ccb7-5&oh=00_AfDH6zhVbXvgXH9VaTNSE75tSjH4uKgzpTHfDtOU5yD2OA&oe=643ECF08&_nc_sid=6136e7',
  },
]

router.get('/breakfasts', (req, res) => {
  res.send(breakfastData)
})

module.exports = router
