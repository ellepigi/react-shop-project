import "./Categories.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Page from "./Page.js"
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";


export default function Categories(){

  
    const location = useLocation();
    useEffect(() => {
        fetchData()
      }, [location.key])

    const category = location.state;
    console.log(category)

  const [products, setProducts] = useState([]);


    const fetchData = () => {
      return axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => setProducts(response.data));
            
  
    }
  
    useEffect(() => {
      fetchData();
    },[]) 

    

  




    return(
        <>
      <Navbar></Navbar>
        <div className="App">
      


      <div className='body'>
        <h1 id="page-title">{category}</h1>
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
    <Footer></Footer>
    </>
    )

}