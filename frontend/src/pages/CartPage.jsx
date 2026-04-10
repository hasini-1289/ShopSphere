import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Message from "../components/Message";

const CartPage = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="row cart-page">
      <div className="col-md-8">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ul className="list-group list-group-flush">
            {cartItems.map((item) => (
              <li key={item._id} className="list-group-item">
                <div className="row">
                  <div className="col-md-2">
                    <img src={item.image} alt={item.title || item.name} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-3">
                    <Link to={`/product/${item._id}`}>{item.title || item.name}</Link>
                  </div>
                  <div className="col-md-2">${item.price}</div>
                  <div className="col-md-2">
                    <button onClick={() => decrementQuantity(item._id)}>-</button>
                    <span className="mx-2">{item.qty}</span>
                    <button onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-md-4">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h2>
                Subtotal ({totalItems}) items
              </h2>
              ${totalPrice}
            </li>
            <li className="list-group-item">
              <button
                type="button"
                className="btn btn-primary btn-block"
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
