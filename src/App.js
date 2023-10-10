import './App.css';
import Navbar from './Navbar/Navbar';
import React, { useEffect, useState } from "react";
import Page from './Page';
import { BrowserRouter, Route, Link, Routes  } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer.js'
import Cart from './Cart';
import Categories from './Categories';



function App() {



  return (
    <BrowserRouter>

     <>
         
<Navbar></Navbar>
    <Routes>

    <Route exact path='/' element={<Home/>} />

    <Route exact path='/products/:id' element={<Page/>} />

    <Route exact path='/categories/:id'  element={<Categories/>}/>

    <Route exact path='/cart' element={<Cart></Cart>}/>

    </Routes>

    
  
<Footer></Footer>    



   

    </>
    </BrowserRouter>

  );
}

export default App;
