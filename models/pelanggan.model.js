const modul = require('../config/require');
const Telepon = require('./telepon.model');
const Schema = modul.mongoose.Schema;

let PelangganSchema = new Schema({
    nama: {type: String, required: true, max: 200},
    alamat: {type: String, required:true},
    telepon : [{type: Schema.Types.ObjectId, ref: 'Telepon'}]
});



module.exports = modul.mongoose.model('pelanggan', PelangganSchema, 'pelanggan');

