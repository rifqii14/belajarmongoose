//setting mongodb connection

const modul = require('./require.js');

let url = 'mongodb://localhost:27017/tokosepatu';

modul.mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify : false
});

modul.mongoose.Promise = global.Promise;

let database =  modul.mongoose.connection;

database.on('ERROR', console.error.bind(console,'Connection Error'));