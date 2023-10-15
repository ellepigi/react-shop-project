import "./Navbar.css"
import { Link } from "react-router-dom"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io'


function Navbar(){
    const [categories, setCategories] = useState([]);


    const fetchData = () => {
      return axios.get("https://fakestoreapi.com/products/categories")
            .then((response) => setCategories(response.data));
            
  
    }
  
    useEffect(() => {
      fetchData();
    },[]) 

  const { totalUniqueItems } = useCart()

    return(
        <nav>
            <div className="logo"><h1><Link to='/'>MyShop</Link></h1></div>
            <div className="pages">

                <ul>
                <Link to='/'><li> Home </li></Link>
                    <li className="categories"> Categories <IoIosArrowDown></IoIosArrowDown>
                    <ul className="dropdown">

                       {categories.map ((category, index) => 
                        <Link  key={index} to ={`/categories/${category}`} state={category}  > 
                        <li>{category.charAt(0).toUpperCase() + category.slice(1)}</li>
                        </Link>
                                            )}
                      



                        
                    </ul>
                    </li>
                    <Link to="/cart"><li id="my-cart"> <FaShoppingCart /> <span>{totalUniqueItems}</span></li></Link>
                
                </ul>
            </div>
        </nav>
    )
}

export default Navbar