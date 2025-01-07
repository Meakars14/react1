import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const { cartItems } = cartState;

  const [isReadyToPay, setIsReadyToPay] = useState(false);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle removing items from the cart
  const handleRemove = (id) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // PayPal transaction success handler
  const handleSuccess = (details, data) => {
    alert("Transaction completed by " + details.payer.name.given_name);
    // Optionally clear the cart or trigger other actions after successful payment
  };

  // PayPal transaction error handler
  const handleError = (error) => {
    console.error("PayPal Checkout Error: ", error);
  };

  // PayPal transaction cancel handler
  const handleCancel = (data) => {
    alert("Transaction cancelled");
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsReadyToPay(true);
    } else {
      setIsReadyToPay(false);
    }
  }, [cartItems]);

  return (
    <div className="container my-5">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="row">
          {/* Cart Items Table */}
          <div className="col-lg-8">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "80px",
                          height: "80px",
                          marginRight: "10px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                      <span>{item.title}</span>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <p className="card-text">
                  <strong>Total Items:</strong> {cartItems.length}
                </p>
                <p className="card-text">
                  <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
                </p>
                {isReadyToPay ? (
                  <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: totalPrice.toFixed(2),
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={handleSuccess}
                      onError={handleError}
                      onCancel={handleCancel}
                    />
                  </PayPalScriptProvider>
                ) : (
                  <button className="btn btn-primary w-100" disabled>
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h3>Your cart is empty!</h3>
          <p>Browse our products and add something to your cart.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
