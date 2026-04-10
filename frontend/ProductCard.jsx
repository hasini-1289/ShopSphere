import { useCart } from "../context/CartContext";
import "../styles/productcard.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
