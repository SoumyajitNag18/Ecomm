const PORT = 4000;

// this is the express setup
const express = require("express");
const app = express();

// auth strat setup and cross origin preference
const jwt = require("jsonwebtoken");
const cors = require("cors");

// file upload functionality setup
const multer = require("multer");

// database setup
const mongoose = require("mongoose");


const path = require ("path");


const dbConnect = mongoose.connect('mongodb+srv://admin:admin@cluster0.jsucpf7.mongodb.net/');


// make application to serve backend setup
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})