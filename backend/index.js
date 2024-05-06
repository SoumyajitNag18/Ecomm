const PORT = 4000;

// Express Setup done
const express = require("express");
const app = express();

// JSON Webtoken setup and cross origin preference
const jwt = require("jsonwebtoken");
const cors = require("cors");

// File upload functionality setup
const multer = require("multer");

// MongoDB Setup
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

const path = require ("path");

const dbConnect = mongoose.connect('mongodb+srv://admin:admin@cluster0.jsucpf7.mongodb.net/');

// Make application to serve backend setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Express App is running successfully')
})

// Image Storage Engine with Multer

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

//Creating API for adding Products
app.post('/addproduct', async(req, res)=>{
    let products=await Product.find();
    let id;
    if (products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    try{
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
        });
        await product.save();
    }catch(error){}
    console.log("Product was added and saved successfully!");
    res.json({
        success: true,
        name: req.body.name,
    });
})

//Creating API for deleting Products
app.post('/removeproduct', async(req, res)=>{
    await Product.findOneAndDelete({id: req.body.id});
    console.log('Product was removed successfully!');
    res.json({
        success: true,
        name: req.body.name,
    })
})

//Creating API for getting all product
app.get('/allproducts', async(req, res)=>{
    let products=await Product.find({});
    console.log("All Products were fetched.");
    res.send(products);
})

//Schema creating for user model 

const users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating endpoint for registering the user
app.post('/signup' ,async (req,res)=>{

    let check = await users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:"Existing user found with same email address!"})
    }
    let cart = {};
    for (let i = 0; i < 150; i++) {
         cart[i]=0;
    }
    const user = new users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    //Genrating and sending token as a response with the help of JWT
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
})

// Creating endpoint for User Login
app.post('/login' ,async (req,res)=>{
    let user = await users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }

            //Genrating and sending token as a response with the help of JWT
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password! Try again please!"});
        }
    }
})

// Creating end point for new collections data
app.get('/newcollections', async(req, res)=>{
    let products = await Product.find();
    let newcollection = products.slice(1).slice(-8);
    console.log("All New Collections were fetched!");
    res.send(newcollection);
});

//Creating end point for popular in women section
app.get('/popularinwomen', async(req, res)=>{
    let products = await Product.find({category:'women'});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched!");
    res.send(popular_in_women);
})

//Creating middle ware to fetch user
const fetchUser = async (req, res, next)=>{
    const token= req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token."})
    }
    else{
        try{
            //Verifying token as a response with the help of JWT
            const data = jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using valid token."})
        }
    }
}

//Creating end point for adding product in cart data
app.post('/addtocart', fetchUser,async(req, res)=>{
    console.log("Added to cart.",req.body.itemId);
    let userData = await users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added to cart.");
});

//Creating end point for removing product from cart data
app.post('/removefromcart', fetchUser,async(req, res)=>{
    console.log("Removed from cart.",req.body.itemId);
    let userData = await users.findOne({_id:req.user.id});
    if(userData.cartData[re.body.itemId]>0)
        userData.cartData[req.body.itemId] -= 1;
    await users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed from cart.");
});

//Creating end point for getting cart data
app.post('/getcart', fetchUser,async(req, res)=>{
    console.log("Getting products from cart.",req.body.itemId);
    let userData = await users.findOne({_id: req.user.id});
    res.json(userData.cartData)
});

//For any kind of errors 
app.listen(PORT, (error) => {
    if(!error){
        console.log('Server running on Port '+ PORT)
    }
    else{
        console.log('Error: '+ error)
    }
})