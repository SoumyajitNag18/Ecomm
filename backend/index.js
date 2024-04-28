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

//Image Storage Engine

const storage= multer.diskStorage({
    destination:"./upload/images",
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage});
 
//Creating upload end points for images
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'),(req,res)=> {
    res.json({
        success:1,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    });
});

//Creating Schema for MongoDB
const Product= mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    }, 
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true,
    },
});