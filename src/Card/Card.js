import React from "react"
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { AiFillStar } from 'react-icons/ai'

 function Card(props){

    const { addItem } = useCart();

    const shortTitle = props.product.title.length > 20 ? props.product.title.slice(0, 20) + "..." : props.product.title;


    return(
        

     <div className="card">
           <img className="card-img" src={props.product.image} alt="product-img" />
           <Link   to={`/products/${props.product.title}`} state={props.product}>
           <h3>{shortTitle}</h3>
           </Link>
           <div className="card-text">
           <h5 className="price">{props.product.price} $</h5>
           <h5>{props.product.rating.rate} <AiFillStar></AiFillStar></h5>
           </div>
           <button type="button" className="button" onClick={()=> addItem(props.product)}>Add to cart</button>
            
  </div>
    )
}


export default Card