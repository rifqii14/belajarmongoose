const modul = require('../config/require');
const Pelanggan = require('./pelanggan.model')
const Schema = modul.mongoose.Schema;

let TeleponSchema = new Schema({
    _pelanggan : {type: Schema.Types.ObjectId, ref: 'Pelanggan'},
    telepon: {type: String, required: true}
});

module.exports = modul.mongoose.model('telepon', TeleponSchema, 'telepon');

