import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import { useCart } from 'react-use-cart'

export default function Cart() {

const { isEmpty,
  totalUniqueItems,
  cartTotal,
  updateItem,
  updateItemQuantity,
  removeItem,
  emptyCart,
  items } = useCart()





  return (
<>
<Navbar></Navbar>

<h1>Price: {cartTotal} $</h1>
<h1> Products </h1>
<div>
{items.map((item, index)=>{
  <div key={index}>
  <h1>{item.title}</h1>
  <img src={item.img}></img>
</div>
})}
</div>

<Footer></Footer>
</>  )
}
