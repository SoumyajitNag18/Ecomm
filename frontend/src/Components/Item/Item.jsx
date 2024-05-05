import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
          <Link to={`/product/${props.id}`} ><img style={{width:"220px" , height:"267px"}}onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                &#x20B9;{props.new_price}
            </div>
            <div className="item-price-old">
                &#x20B9;{props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item
