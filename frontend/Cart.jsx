import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="continue-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h3>{item.title}</h3>
                <span className="item-category">{item.category}</span>
                <p className="item-price">${item.price.toFixed(2)} each</p>
              </div>
              <div className="item-controls">
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item._id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item._id)}>+</button>
                </div>
                <p className="item-total">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <Link to="/" className="back-link">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
