import "./home.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Route, Routes } from 'react-router-dom';
import Page from "./Page.js"


export default function Home(){

    const [products, setProducts] = useState([]);


    const fetchData = () => {
      return axios.get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data));
            
  
    }
  
    useEffect(() => {
      fetchData();
    },[]) 


    
    



    return(
      
        <div className="App">
      


      <div className='body'>
        <h1 id="page-title">All products</h1>
        <div className='container'>
        {products.map((product, index) => <div className='card' key={index}>
        
        {/* <Link to={`/products/${product.title}`} state={product}> */}
          <img id="card-img" src={product.image} />
        {/* </Link> */}
            
          
          
          <Link   to={`/products/${product.title}`} state={product}><h3  id='card-title'>{product.title}</h3></Link>
          <button  id="price">{product.price} $</button>
          <button type="button" id="buy">Add to cart</button>
          </div>)}
          </div>
      </div>

    </div>
    )

}