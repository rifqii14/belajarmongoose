const Sepatu = require('../models/sepatu.model');

exports.getAll = (req,res) => {
    Sepatu.find((err,data)=>{
        if(err){
            res.send({message : 'error', detail: err });
        }
        else{
            if(data == null || data == 0){
                res.send({message : 'error', data: "not found"})
            }else{
                 res.send({message : 'success', data: data});
            }
        }
    });
}

exports.create = (req,res) => {
    let sepatu = new Sepatu({
        nama : req.body.nama,
        harga : req.body.harga
    });

    sepatu.save((err,data) => {
        if(err){
            res.send({message : 'error', detail: err });
        }
        else {
            res.send({message : 'success', data: data});
        }
    })
}


exports.getID = (req,res) => {
    Sepatu.findOne({_id: req.params.id}, (err,data)=>{
        if(err){
            res.send({message : 'error', detail: err });
        }
        else{
            if(data == null || data == 0){
                res.send({message : 'error', data: "not found"});
            }else{
                res.send({message : 'success', data: data});
            }
        }
    });
}

exports.put = (req, res) => {
    Sepatu.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, (err,data) => {
        if(err){
            res.send({message : 'error', detail: err });
        }
        else{
            res.send({message : 'success', data: data});
        }
    })
}

exports.delete = (req, res) => {
    Sepatu.findOneAndDelete({_id:req.params.id}, (err,data) => {
        if(err){
            res.send({message : 'error', detail: err });
        }
        else{
            res.send({message : 'success', data: data});
        }
    })
}