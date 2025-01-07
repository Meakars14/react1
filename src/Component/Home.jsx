import React, { useState, useEffect } from "react";
import Billboard from "./Billboard";
import LatestCollection from "./LatestCollection";
import SubscribeSection from "./SubscribeSection";
import SellingPro from "./SellingPro";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from Fake Store API and limit the results
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedProducts(data.slice(0, 6)); // Limit to 6 featured products
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <Billboard />
      <br /><br /><br />
      <LatestCollection />
      <SubscribeSection />
      <SellingPro />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Welcome To M-Shopping</h1>
        <p className="text-center lead">
          Discover top-notch products curated just for you. M-Shopping makes shopping easy!
        </p>

        {/* Featured Products Section */}
        <h2 className="text-center mb-4">Featured Products</h2>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {featuredProducts.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="text-primary">${product.price.toFixed(2)}</h6>
                    <p className="card-text text-truncate" title={product.description}>
                      {product.description}
                    </p>
                    <a
                      href={`/product/${product.id}`}
                      className="btn btn-outline-primary mt-auto"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <a href="/shop" className="btn btn-primary btn-lg">
            Explore All Products
          </a>
        </div>
      </div> 
      
    </div>
   
  );
};

export default Home;
