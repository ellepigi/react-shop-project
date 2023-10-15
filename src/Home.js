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

           
            )}
          </div>
        </div>
      )}
    </div>
  );
}
