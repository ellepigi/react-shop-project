import "./home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    return axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <h3>Loading...</h3>
        </div>
      ) : (
        <div className="body">
          <h1 id="page-title">All products</h1>
          <div className="container">
            {products.map(
              (product, index) => (
                <Card
                  key={index}
                  product={product}
                  
                />
              )

              /* <Link to={`/products/${product.title}`} state={product}> */
              /* <img id="card-img" src={product.image} /> */

              /* </Link> */

              //  <Link   to={`/products/${product.title}`} state={product}><h3  id='card-title'>{product.title}</h3></Link>
              // <button  id="price">{product.price} $</button>
              // <button type="button" id="buy" onClick={()=> addItem(product)} >Add to cart</button>
              // </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
