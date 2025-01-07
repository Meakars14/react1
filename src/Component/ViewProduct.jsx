import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ViewProduct = () => {
  const { id } = useParams(); // Get product ID from URL
  const { cartDispatch } = useContext(CartContext); // Access dispatch from CartContext
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details by ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      console.log("Dispatching to cart:", product); // Debugging log
      cartDispatch({ type: "ADD_TO_CART", payload: product });
      alert(`${product.title} added to cart!`);
    } else {
      alert("Product not found!");
    }
  };
  

  return (
    <div className="container mt-4">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : product ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <h3 className="text-primary">${product.price.toFixed(2)}</h3>
            <p className="mt-3">{product.description}</p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <div className="mt-4">
              <button className="btn btn-success me-2" onClick={handleAddToCart}>
                Add to Cart <i className="bi bi-cart-plus"></i>
              </button>
              <Link to="/shop" className="btn btn-secondary">
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2>Product not found</h2>
          <Link to="/shop" className="btn btn-secondary">
            Back to Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
