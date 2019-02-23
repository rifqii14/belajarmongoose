const express = require('express');
const bodyParser = require("body-parser");
const conn = require('./config/connection');

const app = express();

//konfigurasi express
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//konfigurasi untuk routes
const sepatu_route = require('./routes/sepatu.route');
const telepon_route = require('./routes/telepon.route');
const pelanggan_route = require('./routes/pelanggan.route');

app.get('/api', (req,res) => {
    res.send('WELCOME TO API TOKO SEPATU');
});

app.use('/api/sepatu',sepatu_route);

app.use('/api/telepon',telepon_route);

app.use('/api/pelanggan',pelanggan_route);

//setting port
let port = 6000;
app.listen(port, () => {
    console.log("Server berjalan pada port "+port);
});

