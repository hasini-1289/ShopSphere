import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          ShopSphere
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart" className="cart-link">
            Cart
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
