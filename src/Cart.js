import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import { useCart } from 'react-use-cart'
import './Cart.css'


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
<div className='cart-body'>
<h1>Price: {cartTotal} $</h1>
<h1> Products </h1>
<div>
{items.map((item, index)=>
  <div className="cart-card" key={index}>
    <div>
      <img className="cart-img" src={item.image} />
      </div>
      <div>
  <h3 className='cart-item-title'>{item.title}</h3>
  <h5>{item.price} $</h5>
  <p>x{item.quantity}</p>
  <div className='cart-buttons'>
  <button className='quantity-buttons' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>

    <button className='quantity-buttons' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
  <button className='remove-item' onClick={()=>removeItem(item.id)}>Remove Item</button>
  </div>
  </div>
</div>
)}
</div>
</div>

<Footer></Footer>
</>  )
}
