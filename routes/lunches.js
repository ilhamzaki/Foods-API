const express = require('express')
const router = express.Router()

const lunchData = [
  {
    id: 1,
    makan_siang: [
      {
        nama: 'Daging Dada Ayam',
        kalori: 183,
        unit: '110 gram',
      },
      {
        nama: 'Nasi Putih',
        kalori: 97,
        unit: '75 gram',
      },
      {
        nama: 'Margarin',
        kalori: 42,
        unit: '8 gram',
      },
      {
        nama: 'Pare',
        kalori: 38,
        unit: '130 gram',
      },
      {
        nama: 'Sambal Pete',
        kalori: 33,
        unit: '15 gram',
      },
      {
        nama: 'Selada Daun Hijau',
        kalori: 15,
        unit: '100 gram',
      },
      {
        nama: 'Wortel',
        kalori: 12,
        unit: '30 gram',
      },
      {
        nama: 'Cabai Merah',
        kalori: 16,
        unit: '5 gram',
      },
    ],
    foto: 'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/241843508_3117279855172349_5187759341092920411_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=eU_qEDidFooAX_M2cpK&edm=AJqaXLUBAAAA&ccb=7-5&ig_cache_key=MjcyNTY1MDY1NDU5NjM5MDQ0Nw%3D%3D.2-ccb7-5&oh=00_AfCImapKLPLBScsEjZc4huFLZ_R29P-xhGHd-VXpP2v43w&oe=643EB11C&_nc_sid=22239a',
  },
]

router.get('/lunches', (req, res) => {
  res.send(lunchData)
})

module.exports = router
