import './App.css';
import Navbar from './Navbar/Navbar';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Page from './Page';
import { BrowserRouter, Route, Link, Routes  } from 'react-router-dom';
import Home from './Home';
import Footer from './footer.js'



function App() {




  // const [products, setProducts] = useState([]);



  // const fetchData = () => {
  //   return axios.get("https://fakestoreapi.com/products")
  //         .then((response) => setProducts(response.data));
          

  // }

  // useEffect(() => {
  //   fetchData();
  // },[]) 
 

  
 
  return (
     <>
         


<Navbar ></Navbar>
<Home></Home>
<Footer></Footer>     
   



    </>
  );
}

export default App;
