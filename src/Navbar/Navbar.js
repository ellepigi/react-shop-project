import "./Navbar.css"
import { Link } from "react-router-dom"
import axios from "axios";
import React, { useEffect, useState } from "react";




function Navbar(){
    const [categories, setCategories] = useState([]);


    const fetchData = () => {
      return axios.get("https://fakestoreapi.com/products/categories")
            .then((response) => setCategories(response.data));
            
  
    }
  
    useEffect(() => {
      fetchData();
    },[]) 



    return(
        <nav>
            <div className="logo"><h1><Link to='/'>MyShop</Link></h1></div>
            <div className="pages">
                <ul>
                <Link to='/'><li> Home </li></Link>
                    <li class="categories"> Categories 
                    <ul class="dropdown">

                       {categories.map ((category, index) => 
                        <Link key={index} to={`/categories/${category}`} state={category}> <li>{category}</li>
                        </Link>
                                            )}
                      



                        
                    </ul>
                    </li>
                    <li> My Cart </li>
                
                </ul>
                <input placeholder="Search for products..."></input>
            </div>
        </nav>
    )
}

export default Navbar