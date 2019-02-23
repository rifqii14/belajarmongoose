const Pelanggan = require('../models/pelanggan.model');
const Telepon = require('../models/telepon.model');

exports.getAll = (req,res) => {
    Pelanggan.find((err,data) =>{
        if(err){
            res.send({message:'eror', detail: err});
        }else{
            if(data == 0 || data == null){
                res.send({message:'eror', data: 'not found'});
            }else{
                res.send({message:'true', data: data})
            }
        }
    });
}

exports.create = (req,res) => {
    let pelanggan = new Pelanggan({
        nama : req.body.nama,
        alamat: req.body.alamat
    });

    pelanggan.save((err,data) => {
        if(err){
            res.send({message:'eror', detail: err});
        }else{
            let telepon = new Telepon({
                telepon: req.body.telepon
            });

            telepon.save((err) => {});

            res.send({message:'success', data: data})
        }
    });
}