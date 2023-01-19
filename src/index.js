import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home.js"
import Page from "./Page.js"
import Categories from "./Categories.js"
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
    
    <Routes>
    
    <Route exact path='/' element={<App/>} />

    {/* <Route exact path='/product/:id' element={<Page></Page>} /> */}

    <Route exact path='/products/:id' element={<Page/>} />

    <Route exact path='/categories/:id'  element={<Categories/>}></Route>

    <Route exact path='/cart' element={<Cart></Cart>}/>
    </Routes>
  
    <App />
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
