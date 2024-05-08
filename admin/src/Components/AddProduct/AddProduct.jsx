import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

//For initialisation purpose
const AddProduct = () => {
    const [image, setImage]= useState(null);
    const [productDetails, setProductDetails]= useState({
        name:'',
        image:'',
        category:'women',
        new_price:0,
        old_price:0,
        description:''
    });

    //For showing the clicked image 
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    //For showing the clicked image 
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]:e.target.value});
    }

    const Add_Product = async() =>{
        console.log(productDetails);
        let responseData;
        let product = {...productDetails};

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json'
            },
            body: formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})

        if(responseData.success)
        {
            product.image=responseData.image_url;
            console.log("product -> " , product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(product),
            }).then((res)=>res.json()).then((data)=>{
                data.success ? alert("Product is added successfully!") : alert("Failed to add the product!")
            })
        }
    }

    return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Title of product' />
        </div>
        <div className="addproduct-itemfield">
            <p>Product Description</p>
            <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder='Description of product' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Old price of product'/>
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Offer price of product'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kids</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct
