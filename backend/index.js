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
    res.send('Express App is running successfully')
})

app.listen(PORT, (error) => {
    if(!error){
        console.log('Server running on Port '+ PORT)
    }
    else{
        console.log('Error '+ error)
    }
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

app.post('/addproduct', async(req, res)=>{
    let products=await Product.find({});
    let id;
    if (products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved!");
    res.json({
        success: true,
        name: req.body.name,
    });
})
