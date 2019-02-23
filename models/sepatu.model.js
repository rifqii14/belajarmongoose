const modul = require('../config/require');

const Schema = modul.mongoose.Schema;

let SepatuSchema = new Schema({
    nama: {type: String, required: true, max: 200},
    harga: {type: Number, required: true}
});

module.exports = modul.mongoose.model('sepatu', SepatuSchema, 'sepatu');

