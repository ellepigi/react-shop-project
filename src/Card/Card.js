import React from "react"
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";


 function Card(props){

    const { addItem } = useCart();

    const shortTitle = props.product.title.length > 50 ? props.product.title.slice(0, 50) + "..." : props.product.title;


    return(
         <div className="card">
            <img className="card-img" src={props.product.image} alt="product-img" />
            <Link   to={`/products/${props.product.title}`} state={props.product}>
            <h3>{shortTitle}</h3>
            </Link>
            <button type="button" className="button" onClick={()=> addItem(props.product)}>Buy</button>
             <h4 className="price">{props.product.price} $</h4>
            
         </div>
    )
}


export default Card