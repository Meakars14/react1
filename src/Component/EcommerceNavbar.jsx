import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const EcommerceNavbar = () => {
  const { cartState } = useContext(CartContext); // Access cart state
  const totalItems = cartState.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          M-SHIPPING
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links & Search */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deals">
                Deals
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search for products"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary ms-2" type="submit">
              Search
            </button>
          </form>

          {/* User Account & Cart */}
          <div className="d-flex">
            <Link className="btn btn-outline-secondary me-2" to="/account">
              <i className="bi bi-person"></i> Account
            </Link>
            <Link
              className="btn btn-outline-success position-relative"
              to="/cart"
            >
              <i className="bi bi-cart"></i> Cart
              {totalItems > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ zIndex: 1 }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EcommerceNavbar;
