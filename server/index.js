var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

console.log("Starting web server at localhost:3000");

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'chirper-admin',
    password: 'passwordChirper',
    database: 'Chirper'
});

var clientPath = path.join(__dirname, '..', 'client');
var dataPath = path.join(__dirname, 'data.json');

app.use(express.static(clientPath));
app.use(bodyParser.json());

//api routes for get and post
app.route('/api/chirps')
    .get(function (req, res) {

    }).post(function (req, res) {

    }).delete(function(req,res){

    }).put(function(req,res){
        
    });
app.listen(3000);

function getChirp() {
    return new Promise(function (res, rej) {
        fs.readFile(filePath, encoding, function (err, data) {
            if (err) {
                reject(err);
            } else {
                res(data);
            }
        });
    });
}
function getChirps() {
    return new Promise(function (res, rej) {
        fs.writeFile(filePath, data, function (err, data) {
            if (err) {
                rej(err);
            } else {
                res();
            }
        });
    });
}
function insertChirp() {
    return new Promise(function (res, rej) {

    })
}
function updateChirp() {
    return new Promise(function (res, rej) {

    })
}
function deleteChirp() {
    return new Promise(function (res, rej) {

    })
}