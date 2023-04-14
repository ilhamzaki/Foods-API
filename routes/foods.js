const express = require('express')
const router = express.Router()

const foodData = [
  {
    makanan_pokok: [
      {
        nama_masakan: 'Jagung rebus',
        kalori: '90,2',
      },
      {
        nama_masakan: 'Kentang rebus',
        kalori: '166',
      },
      {
        nama_masakan: 'Ketan Putih',
        kalori: '217',
      },
      {
        nama_masakan: 'Ketupat',
        kalori: '32',
      },
      {
        nama_masakan: 'Lontong',
        kalori: '38',
      },
      {
        nama_masakan: 'Nasi Putih',
        kalori: '175',
      },
      {
        nama_masakan: 'Nasi Putih Kentucky',
        kalori: '349',
      },
      {
        nama_masakan: 'Roti Tawar Serat Tinggi',
        kalori: '149',
      },
      {
        nama_masakan: 'Singkong Rebus',
        kalori: '146',
      },
      {
        nama_masakan: 'Talas Rebus',
        kalori: '98',
      },
      {
        nama_masakan: 'Ubi Rebus',
        kalori: '125',
      },
      {
        nama_masakan: 'Bihun Goreng',
        kalori: 296,
      },
      {
        nama_masakan: 'Bubur Ayam',
        kalori: 165,
      },
      {
        nama_masakan: 'Bubur Sum-sum',
        kalori: 178,
      },
      {
        nama_masakan: 'Kentang Goreng',
        kalori: 211,
      },
      {
        nama_masakan: 'Mie Goreng',
        kalori: 321,
      },
      {
        nama_masakan: 'Nasi Goreng',
        kalori: 267,
      },
      {
        nama_masakan: 'Soun Goreng',
        kalori: 263,
      },
      {
        nama_masakan: 'Spaghetti',
        kalori: 642,
      },
      {
        nama_masakan: 'Tape Singkong',
        kalori: 260,
      },
    ],
  },
]

router.get('/foods', (req, res) => {
  res.send(foodData)
})

module.exports = router
