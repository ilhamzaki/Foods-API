const express = require('express')
const router = express.Router()

const foodData = [
  {
    makanan_pokok: [
      {
        nama: 'Jagung Rebus',
        berat: 250,
        kalori: 90.2,
        unit: 1,
      },
      {
        nama: 'Kentang Rebus',
        berat: 200,
        kalori: 166,
        unit: 2,
      },
      {
        nama: 'Ketan Putih',
        berat: 120,
        kalori: 217,
        unit: 2.75,
      },
      {
        nama: 'Ketupat',
        berat: 160,
        kalori: 32,
        unit: 0.5,
      },
      {
        nama: 'Lontong',
        berat: 200,
        kalori: 38,
        unit: 0.5,
      },
      {
        nama: 'Nasi Putih',
        berat: 100,
        kalori: 175,
        unit: 2.25,
      },
      {
        nama: 'Nasi Putih Kentucky',
        berat: 225,
        kalori: 349,
        unit: 4.25,
      },
      {
        nama: 'Roti Tawar Serat Tinggi',
        berat: 60,
        kalori: 149,
        unit: 1.75,
      },
      {
        nama: 'Singkong Rebus',
        berat: 100,
        kalori: 146,
        unit: 1.75,
      },
      {
        nama: 'Talas Rebus',
        berat: 100,
        kalori: 98,
        unit: 1.25,
      },
      {
        nama: 'Ubi Rebus',
        berat: 100,
        kalori: 125,
        unit: 1.5,
      },
      {
        nama: 'Bubur',
        berat: 200,
        kalori: 44,
        unit: 0.5,
      },
      {
        nama: 'Crakers',
        berat: 50,
        kalori: 229,
        unit: 2.75,
      },
      {
        nama: 'Makaroni',
        berat: 25,
        kalori: 91,
        unit: 1.25,
      },
      {
        nama: 'Mie Instant',
        berat: 50,
        kalori: 168,
        unit: 2,
      },
      {
        nama: 'Nasi Tim',
        berat: 100,
        kalori: 88,
        unit: 1,
      },
      {
        nama: 'Nasi Uduk',
        berat: 200,
        kalori: 506,
        unit: 6.25,
      },
      {
        nama: 'Roti Tawar',
        berat: 50,
        kalori: 128,
        unit: 1.5,
      },
      {
        nama: 'Bihun Goreng',
        berat: 150,
        kalori: 296,
        unit: 3.75,
      },
      {
        nama: 'Bubur Ayam',
        berat: 200,
        kalori: 165,
        unit: 2,
      },
      {
        nama: 'Bubur Sum-Sum',
        berat: 100,
        kalori: 178,
        unit: 2.25,
      },
      {
        nama: 'Kentang Goreng',
        berat: 150,
        kalori: 211,
        unit: 2.75,
      },
      {
        nama: 'Mie Goreng',
        berat: 200,
        kalori: 321,
        unit: 4,
      },
      {
        nama: 'Nasi Goreng',
        berat: 100,
        kalori: 267,
        unit: 3.25,
      },
      {
        nama: 'Soun Goreng',
        berat: 100,
        kalori: 263,
        unit: 3.25,
      },
      {
        nama: 'Spaghetti',
        berat: 300,
        kalori: 642,
        unit: 8,
      },
      {
        nama: 'Tape Singkong',
        berat: 150,
        kalori: 260,
        unit: 3.25,
      },
    ],
    buah_buahan: [
      {
        nama: 'Apel',
        berat: 160,
        kalori: 92,
        unit: 1,
      },
      {
        nama: 'Apel Merah',
        berat: 140,
        kalori: 82,
        unit: 1,
      },
      {
        nama: 'Belimbing',
        berat: 160,
        kalori: 80,
        unit: 0.75,
      },
      {
        nama: 'Duku',
        berat: 200,
        kalori: 81,
        unit: 1,
      },
      {
        nama: 'Jambu Air',
        berat: 60,
        kalori: 35.4,
        unit: 0.5,
      },
      {
        nama: 'Jambu Biji',
        berat: 320,
        kalori: 157,
        unit: 2,
      },
      {
        nama: 'Jeruk Medan',
        berat: 140,
        kalori: 46,
        unit: 0.5,
      },
      {
        nama: 'Jeruk Pontianak',
        berat: 150,
        kalori: 67,
        unit: 0.75,
      },
      {
        nama: 'Jeruk Sunkist',
        berat: 200,
        kalori: 40,
        unit: 0.5,
      },
      {
        nama: 'Mangga Manalagi',
        berat: 100,
        kalori: 72,
        unit: 1,
      },
      {
        nama: 'Nanas',
        berat: 200,
        kalori: 104,
        unit: 1.25,
      },
      {
        nama: 'Pepaya',
        berat: 100,
        kalori: 46,
        unit: 0.5,
      },
      {
        nama: 'Pir',
        berat: 200,
        kalori: 80,
        unit: 1,
      },
      {
        nama: 'Pisang Rebus',
        berat: 125,
        kalori: 136.5,
        unit: 1.75,
      },
      {
        nama: 'Salak',
        berat: 150,
        kalori: 63.6,
        unit: 0.75,
      },
      {
        nama: 'Semangka',
        berat: 150,
        kalori: 48,
        unit: 0.5,
      },
      {
        nama: 'Alpukat',
        berat: 100,
        kalori: 85,
        unit: 1,
      },
      {
        nama: 'Anggur',
        berat: 125,
        kalori: 60,
        unit: 0.75,
      },
      {
        nama: 'Lengkeng',
        berat: 100,
        kalori: 79,
        unit: 1,
      },
      {
        nama: 'Melon',
        berat: 120,
        kalori: 46,
        unit: 0.5,
      },
      {
        nama: 'Mangga Harum Manis',
        berat: 300,
        kalori: 90,
        unit: 1,
      },
      {
        nama: 'Pir Hijau',
        berat: 200,
        kalori: 105,
        unit: 1.25,
      },
      {
        nama: 'Pisang Ambon',
        berat: 100,
        kalori: 74.2,
        unit: 1,
      },
      {
        nama: 'Pisang Barangan',
        berat: 200,
        kalori: 236,
        unit: 3,
      },
      {
        nama: 'Pisang Mas',
        berat: 125,
        kalori: 11,
        unit: 1.5,
      },
      {
        nama: 'Pisang Raja',
        berat: 150,
        kalori: 126,
        unit: 1.5,
      },
      {
        nama: 'Sirsak',
        berat: 125,
        kalori: 55,
        unit: 0.25,
      },
      {
        nama: 'Durian Montong',
        berat: 100,
        kalori: 134,
        unit: 1.5,
      },
      {
        nama: 'Rambutan',
        berat: 100,
        kalori: 69,
        unit: 0.75,
      },
      {
        nama: 'Sawo',
        berat: 100,
        kalori: 92,
        unit: 1.75,
      },
    ],
    lauk_pauk: [
      {
        nama: 'Arsik',
        berat: 95,
        kalori: 94.05,
        unit: 1,
      },
      {
        nama: 'Ayam Panggang Bumbu Kuning',
        berat: 100,
        kalori: 129.4,
        unit: 1.5,
      },
      {
        nama: 'Ayam Panggang',
        berat: 100,
        kalori: 164.3,
        unit: 3.25,
      },
      {
        nama: 'Daging Panggang',
        berat: 70,
        kalori: 150,
        unit: 1.75,
      },
      {
        nama: 'Ikan Mas Pepes',
        berat: 200,
        kalori: 143.5,
        unit: 1.75,
      },
      {
        nama: 'Sambal Goreng Tempe',
        berat: 50,
        kalori: 116,
        unit: 1.5,
      },
      {
        nama: 'Telur Asin Rebus',
        berat: 75,
        kalori: 138,
        unit: 1.75,
      },
      {
        nama: 'Telur Ayam Rebus',
        berat: 60,
        kalori: 97,
        unit: 1.25,
      },
      {
        nama: 'Ati Ayam Goreng',
        berat: 50,
        kalori: 98,
        unit: 1.25,
      },
      {
        nama: 'Ayam Pop',
        berat: 200,
        kalori: 265,
        unit: 3.25,
      },
      {
        nama: 'Bakso Daging Sapi',
        berat: 100,
        kalori: 260,
        unit: 3.25,
      },
      {
        nama: 'Empal Daging',
        berat: 100,
        kalori: 147,
        unit: 1.75,
      },
      {
        nama: 'Ikan Bandeng Goreng',
        berat: 160,
        kalori: 180.7,
        unit: 2.25,
      },
      {
        nama: 'Ikan Baronang Goreng',
        berat: 120,
        kalori: 107.5,
        unit: 1.25,
      },
      {
        nama: 'Ikan Bawal Goreng',
        berat: 120,
        kalori: 113.3,
        unit: 1.5,
      },
      {
        nama: 'Ikan Ekor Goreng',
        berat: 100,
        kalori: 107.8,
        unit: 1.25,
      },
      {
        nama: 'Ikan Kembung Goreng',
        berat: 80,
        kalori: 87.65,
        unit: 1,
      },
      {
        nama: 'Ikan Lele Goreng',
        berat: 60,
        kalori: 57.5,
        unit: 0.75,
      },
      {
        nama: 'Ikan Patin Goreng',
        berat: 200,
        kalori: 252.7,
        unit: 3,
      },
      {
        nama: 'Ikan Selar Goreng',
        berat: 40,
        kalori: 63.75,
        unit: 0.75,
      },
      {
        nama: 'Ikan Tenggiri Goreng',
        berat: 60,
        kalori: 85.3,
        unit: 1,
      },
      {
        nama: 'IkanTeri Goreng',
        berat: 50,
        kalori: 66,
        unit: 0.75,
      },
      {
        nama: 'Ikan Tuna Goreng',
        berat: 60,
        kalori: 110,
        unit: 1.2,
      },
      {
        nama: 'Kerang Rebus',
        berat: 100,
        kalori: 59,
        unit: 0.75,
      },
      {
        nama: 'Macaroni Schootel',
        berat: 50,
        kalori: 177,
        unit: 2.25,
      },
      {
        nama: 'Tahu Bacem',
        berat: 100,
        kalori: 147,
        unit: 1.75,
      },
      {
        nama: 'Telur Mata Sapi',
        berat: 60,
        kalori: 40,
        unit: 1.75,
      },
      {
        nama: 'Tempe Bacem',
        berat: 50,
        kalori: 157,
        unit: 2,
      },
      {
        nama: 'Tempe Goreng',
        berat: 50,
        kalori: 118,
        unit: 1.5,
      },
      {
        nama: 'Tenggiri Bumbu Kuning',
        berat: 90,
        kalori: 94.4,
        unit: 1,
      },
      {
        nama: 'Udang Goreng Besar',
        berat: 80,
        kalori: 68.25,
        unit: 3.25,
      },
      {
        nama: 'Abon Sapi',
        berat: 50,
        kalori: 158,
        unit: 2,
      },
      {
        nama: 'Ayam Goreng Kecap',
        berat: 75,
        kalori: 358.8,
        unit: 4.5,
      },
      {
        nama: 'Ayam Panggang',
        berat: 80,
        kalori: 385.6,
        unit: 4.75,
      },
      {
        nama: 'Sayap Ayam',
        berat: 50,
        kalori: 63.6,
        unit: 0.75,
      },
      {
        nama: 'Daging Balado',
        berat: 50,
        kalori: 147,
        unit: 1.75,
      },
      {
        nama: 'Dendeng Balado',
        berat: 40,
        kalori: 338,
        unit: 4.25,
      },
      {
        nama: 'Gulai Ayam',
        berat: 100,
        kalori: 165.3,
        unit: 2,
      },
      {
        nama: 'Gulai Cumi',
        berat: 100,
        kalori: 183,
        unit: 2.25,
      },
      {
        nama: 'Gulai Kepala Ikan Kakap',
        berat: 320,
        kalori: 218.8,
        unit: 2.75,
      },
      {
        nama: 'Gulai Limpa',
        berat: 60,
        kalori: 294,
        unit: 3.5,
      },
      {
        nama: 'Gulai Tunjang',
        berat: 80,
        kalori: 251,
        unit: 3,
      },
      {
        nama: 'Ikan Kembung Balado',
        berat: 125,
        kalori: 236.7,
        unit: 3,
      },
      {
        nama: 'Ikan Teri',
        berat: 50,
        kalori: 213,
        unit: 2.75,
      },
      {
        nama: 'Kakap Goreng Tepung',
        berat: 80,
        kalori: 119,
        unit: 1.5,
      },
      {
        nama: 'Kakap Panir',
        berat: 75,
        kalori: 220,
        unit: 2.75,
      },
      {
        nama: 'Keripik Tempe',
        berat: 25,
        kalori: 68,
        unit: 0.75,
      },
      {
        nama: 'Daging Cincang Bulat',
        berat: 50,
        kalori: 168,
        unit: 2,
      },
      {
        nama: 'Ayam Kentucky Paha Atas',
        berat: 150,
        kalori: 194.5,
        unit: 2.5,
      },
      {
        nama: 'Perkedel Jagung',
        berat: 50,
        kalori: 108,
        unit: 1.25,
      },
      {
        nama: 'Perkedel Kentang',
        berat: 50,
        kalori: 123,
        unit: 1.5,
      },
      {
        nama: 'Pu Yung Hai',
        berat: 50,
        kalori: 114,
        unit: 1.5,
      },
      {
        nama: 'Rendang Daging',
        berat: 75,
        kalori: 285.5,
        unit: 3.5,
      },
      {
        nama: 'Sate Ayam',
        berat: 100,
        kalori: 466,
        unit: 6,
      },
      {
        nama: 'Ayam Kentucky Sayap',
        berat: 150,
        kalori: 116,
        unit: 1.5,
      },
      {
        nama: 'Semur Ayam',
        berat: 50,
        kalori: 177.8,
        unit: 2.25,
      },
      {
        nama: 'Sambal Goreng Ati',
        berat: 100,
        kalori: 127,
        unit: 1.5,
      },
      {
        nama: 'Sambal Goreng Tempe Teri',
        berat: 150,
        kalori: 276,
        unit: 3.5,
      },
      {
        nama: 'Sambal Goreng Ati Sapi',
        berat: 100,
        kalori: 200,
        unit: 2.5,
      },
      {
        nama: 'Sambal Goreng Udang + Kentang',
        berat: 100,
        kalori: 123,
        unit: 1.5,
      },
      {
        nama: 'Sop Sapi',
        berat: 260,
        kalori: 227,
        unit: 2.75,
      },
      {
        nama: 'Tahu Goreng',
        berat: 100,
        kalori: 111,
        unit: 1.5,
      },
      {
        nama: 'Tahu Isi',
        berat: 150,
        kalori: 124,
        unit: 1.5,
      },
      {
        nama: 'Tahu Sumedang',
        berat: 100,
        kalori: 113,
        unit: 1.5,
      },
      {
        nama: 'Telur dadar',
        berat: 75,
        kalori: 188,
        unit: 2.25,
      },
    ],
    sayuran: [
      {
        nama: 'Acar Kuning',
        berat: 75,
        kalori: 53,
        unit: 0.5,
      },
      {
        nama: 'Bening Bayam',
        berat: 50,
        kalori: 18,
        unit: 0.25,
      },
      {
        nama: 'Cah Labu Siam',
        berat: 100,
        kalori: 41.6,
        unit: 0.5,
      },
      {
        nama: 'Sayur Asam',
        berat: 100,
        kalori: 88,
        unit: 1,
      },
      {
        nama: 'Sop Ayam Kombinasi',
        berat: 100,
        kalori: 95,
        unit: 1.25,
      },
      {
        nama: 'Sop Bayam',
        berat: 50,
        kalori: 78,
        unit: 1,
      },
      {
        nama: 'Sop Kimlo',
        berat: 100,
        kalori: 104,
        unit: 1.25,
      },
      {
        nama: 'Sop Mutiara Jagung',
        berat: 100,
        kalori: 113,
        unit: 1.5,
      },
      {
        nama: 'Asop Oyong Misoa',
        berat: 100,
        kalori: 106,
        unit: 1.25,
      },
      {
        nama: 'Sop Telur Puyuh',
        berat: 100,
        kalori: 116,
        unit: 1.5,
      },
      {
        nama: 'Sayur Lodeh',
        berat: 100,
        kalori: 61,
        unit: 0.75,
      },
      {
        nama: 'Cah Jagung Putren',
        berat: 100,
        kalori: 59,
        unit: 0.75,
      },
      {
        nama: 'Cah kacang Panjang',
        berat: 100,
        kalori: 72,
        unit: 1,
      },
      {
        nama: 'Sop Oyong Telur Puyuh',
        berat: 100,
        kalori: 134,
        unit: 1.75,
      },
      {
        nama: 'Setup Kentang Buncis',
        berat: 100,
        kalori: 95,
        unit: 1,
      },
      {
        nama: 'Tumis Buncis',
        berat: 100,
        kalori: 52,
        unit: 1.5,
      },
      {
        nama: 'Tumis Daun Singkong',
        berat: 120,
        kalori: 151,
        unit: 1.75,
      },
      {
        nama: 'Tumis Kc. Panjang + Jagung',
        berat: 125,
        kalori: 118,
        unit: 1.75,
      },
      {
        nama: 'Buntil',
        berat: 100,
        kalori: 106,
        unit: 1.25,
      },
      {
        nama: 'Gudeg',
        berat: 150,
        kalori: 132,
        unit: 1.75,
      },
    ],
    siap_saji: [
      {
        nama: 'Asinan',
        berat: 250,
        kalori: 208,
        unit: 2.5,
      },
      {
        nama: 'Toge Goreng',
        berat: 250,
        kalori: 243,
        unit: 3,
      },
      {
        nama: 'Gado-Gado',
        berat: 150,
        kalori: 295,
        unit: 3.75,
      },
      {
        nama: 'Ketoprak',
        berat: 250,
        kalori: 153,
        unit: 2,
      },
      {
        nama: 'Pempek',
        berat: 200,
        kalori: 384,
        unit: 4.75,
      },
      {
        nama: 'Rawon',
        berat: 160,
        kalori: 331,
        unit: 4,
      },
      {
        nama: 'Soto Ayam',
        berat: 100,
        kalori: 101,
        unit: 1.25,
      },
      {
        nama: 'Soto Padang',
        berat: 100,
        kalori: 127,
        unit: 1.5,
      },
      {
        nama: 'Tongseng',
        berat: 120,
        kalori: 331,
        unit: 4,
      },
      {
        nama: 'Hamburger',
        berat: 125,
        kalori: 257,
        unit: 3.25,
      },
      {
        nama: 'Kerupuk Palembang',
        berat: 50,
        kalori: 168,
        unit: 2,
      },
      {
        nama: 'Kerupuk Udang',
        berat: 20,
        kalori: 72,
        unit: 1,
      },
      {
        nama: 'Mie Bakso',
        berat: 200,
        kalori: 302,
        unit: 3.75,
      },
      {
        nama: 'Nasi Tim Ayam',
        berat: 420,
        kalori: 588,
        unit: 7.25,
      },
      {
        nama: 'Pizza',
        berat: 125,
        kalori: 163,
        unit: 2,
      },
      {
        nama: 'Sate Kambing',
        berat: 180,
        kalori: 729,
        unit: 9,
      },
      {
        nama: 'Sayur Krecek',
        berat: 175,
        kalori: 249,
        unit: 3,
      },
      {
        nama: 'Siomay',
        berat: 100,
        kalori: 361,
        unit: 3.75,
      },
      {
        nama: 'Soto Betawi',
        berat: 150,
        kalori: 135,
        unit: 1.75,
      },
      {
        nama: 'Soto Makasar',
        berat: 150,
        kalori: 525,
        unit: 6.5,
      },
      {
        nama: 'Soto Sulung',
        berat: 150,
        kalori: 86,
        unit: 1,
      },
    ],
  },
]

const food = [
  {
    nama: 'Jagung Rebus',
    berat: 250,
    kalori: 90,
    unit: 1,
  },
  {
    nama: 'Kentang Rebus',
    berat: 200,
    kalori: 166,
    unit: 2,
  },
  {
    nama: 'Ketan Putih',
    berat: 120,
    kalori: 217,
    unit: 2.75,
  },
  {
    nama: 'Ketupat',
    berat: 160,
    kalori: 32,
    unit: 0.5,
  },
  {
    nama: 'Lontong',
    berat: 200,
    kalori: 38,
    unit: 0.5,
  },
  {
    nama: 'Nasi Putih',
    berat: 100,
    kalori: 175,
    unit: 2.25,
  },
  {
    nama: 'Nasi Putih Kentucky',
    berat: 225,
    kalori: 349,
    unit: 4.25,
  },
  {
    nama: 'Roti Tawar Serat Tinggi',
    berat: 60,
    kalori: 149,
    unit: 1.75,
  },
  {
    nama: 'Singkong Rebus',
    berat: 100,
    kalori: 146,
    unit: 1.75,
  },
  {
    nama: 'Talas Rebus',
    berat: 100,
    kalori: 98,
    unit: 1.25,
  },
  {
    nama: 'Ubi Rebus',
    berat: 100,
    kalori: 125,
    unit: 1.5,
  },
  {
    nama: 'Bubur',
    berat: 200,
    kalori: 44,
    unit: 0.5,
  },
  {
    nama: 'Crakers',
    berat: 50,
    kalori: 229,
    unit: 2.75,
  },
  {
    nama: 'Makaroni',
    berat: 25,
    kalori: 91,
    unit: 1.25,
  },
  {
    nama: 'Mie Instant',
    berat: 50,
    kalori: 168,
    unit: 2,
  },
  {
    nama: 'Nasi Tim',
    berat: 100,
    kalori: 88,
    unit: 1,
  },
  {
    nama: 'Nasi Uduk',
    berat: 200,
    kalori: 506,
    unit: 6.25,
  },
  {
    nama: 'Roti Tawar',
    berat: 50,
    kalori: 128,
    unit: 1.5,
  },
  {
    nama: 'Bihun Goreng',
    berat: 150,
    kalori: 296,
    unit: 3.75,
  },
  {
    nama: 'Bubur Ayam',
    berat: 200,
    kalori: 165,
    unit: 2,
  },
  {
    nama: 'Bubur Sum-Sum',
    berat: 100,
    kalori: 178,
    unit: 2.25,
  },
  {
    nama: 'Kentang Goreng',
    berat: 150,
    kalori: 211,
    unit: 2.75,
  },
  {
    nama: 'Mie Goreng',
    berat: 200,
    kalori: 321,
    unit: 4,
  },
  {
    nama: 'Nasi Goreng',
    berat: 100,
    kalori: 267,
    unit: 3.25,
  },
  {
    nama: 'Soun Goreng',
    berat: 100,
    kalori: 263,
    unit: 3.25,
  },
  {
    nama: 'Spaghetti',
    berat: 300,
    kalori: 642,
    unit: 8,
  },
  {
    nama: 'Tape Singkong',
    berat: 150,
    kalori: 260,
    unit: 3.25,
  },
]

router.get('/foods', (req, res) => {
  res.send(food)
})

module.exports = router
