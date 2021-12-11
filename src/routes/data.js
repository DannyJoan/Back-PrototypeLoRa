const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');


router.get('/signosVitales', (req, res) =>{
    mysqlConnection.query
    ('SELECT fecha, temperatura, ritmo FROM recepciondata ORDER BY id DESC LIMIT 1', (err, rows, fields) =>
    {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})


router.get('/localizacion', (req, res) =>{
    mysqlConnection.query
    ('SELECT latitud, longitud FROM recepciondata ORDER BY id DESC LIMIT 1', (err, rows, fields) =>
    {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/mensajeUsuario', (req, res) =>{
    mysqlConnection.query
    ('SELECT usuarioID, otroA, otroB FROM recepciondata ORDER BY id DESC LIMIT 1', (err, rows, fields) =>
    {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

router.get('/prueba', (req, res) =>{
    mysqlConnection.query
    ('SELECT * FROM recepciondata', (err, rows, fields) =>
    {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

module.exports = router;