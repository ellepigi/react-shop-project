import "./Categories.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Card from "./Card/Card";

export default function Categories(){

  
    const location = useLocation();
    useEffect(() => {
        fetchData()
      }, [location.key])

    const category = location.state;
    console.log(category)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


    const fetchData = () => {
      return  axios.get(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => {setProducts(response.data);
            setLoading(false)})
            

            
  
    }
  
    useEffect(() => {
      fetchData();
    },[]) 

    
  if(loading){
    return (
      <div className="loading-container">
          <h3>Loading...</h3>
        </div>
    )
  }




    return(
    
      
      
        <>
        <div className="App">
        


      <div className='body'>
        <h1 id="page-title">{category}</h1>
        <div className='container'>
        {products.map((product, index) => 
        < Card key={index} product={product} />
        )}
          </div>
      </div>

    </div>
    </>
    )

}