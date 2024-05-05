import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import HeroWithSorting from '../Components/MiniComps/HeroWithSorting.jsx'

const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext);
  console.log(all_product);
  return (
    <div className='shop-category'>
        <HeroWithSorting banner={props.banner}/>
        <div className="shopcategory-products">
          {all_product.map((item, i)=> {
              if(props.category===item.category){
                  return <Item key={i} id={item.id} name={item.name} 
                  image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{   
                return null;    
              }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Exlpore more
        </div>
    </div>
  )
}

export default ShopCategory

