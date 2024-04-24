import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>122</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">&#x20B9;{product.old_price}</div>
                <div className="productdisplay-right-prices-new">&#x20B9;{product.new_price}</div>
            </div>
            <div className="productdisplay-right-prices-description">
                SHOPPER aims to deliver you with the best quality materials to make their trendy and skin friendly products.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select your size:</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            <p className="productdisplay-right-category"><span>Category: </span>Top, Shirt, Tees</p>
            <p className="productdisplay-right-category"><span>Tags: </span>Modern, Latest, Trendy</p>
        </div>
    </div>
  )
}

export default ProductDisplay
