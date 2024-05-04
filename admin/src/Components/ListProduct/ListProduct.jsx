import { useEffect , useState} from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allproducts, setAllProducts]= useState([]);

    //Request for getting the product list from the DB with a request
    const fetchInfo = async() => {
        await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)});
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    //For removing the product
    const remove_product = async() =>{
        await fetch('http://localhost:4000/removeproduct',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'content-Type': 'application/json',
            },
            body:JSON.stringify({id:id})

        })
        await fetchInfo();

    }

	return( 
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product,index)=>{
                    return <>
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <img src={product.image} alt="" className='listproduct-product-icon'/>
                        <p>{product.name}</p>
                        <p>&#x20B9;{product.old_price}</p>
                        <p>&#x20B9;{product.new_price}</p>
                        <p>{product.category}</p>
                        <img src={cross_icon} alt="" onClick={()=>{remove_product(product.index)}} className="listproduct-remove-icon" />
                    </div>
                    <hr />
                    </>
                })}
            </div>
    	</div>
    )}
export default ListProduct;
