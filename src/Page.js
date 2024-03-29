import "./page.css";
import Navbar from './Navbar/Navbar';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';
import Footer from "./Footer";
import { useCart } from "react-use-cart";




function Page (){




  const location = useLocation();
  const data = location.state;
  console.log(data)

  const { addItem }=  useCart()


return(
 

    
 <>
     <div className="page-container">
  
      <img className="page-img" src={data.image} alt={data.title} />

      <div className="page-text">
        <h1>{data.title}</h1>
        <h3>{data.price} $</h3>
        <h5>Rating: {data.rating.rate}</h5>
        <p>{data.description}</p>
        <button onClick={()=>addItem(data)}>Add to cart</button>
      </div>
    </div>
    </>

 );
}


export default Page