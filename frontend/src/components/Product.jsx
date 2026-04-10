import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  const productTitle = product.title || product.name || "Untitled Product";
  const productRating = Number(product.rating || 0);
  const productReviews = Number(product.numReviews || 0);

  return (
    <div className="product-card">
      <Link to={`/product/${product._id}`}>
        <div className="product-image-container">
          <img
            src={product.image}
            className="product-image"
            alt={productTitle}
          />
        </div>
      </Link>

      <div className="product-card-body">
        <p className="product-category">{product.category}</p>
        <Link to={`/product/${product._id}`}>
          <h3 className="product-title">{productTitle}</h3>
        </Link>
        <p className="product-description">
          {product.description}
        </p>
        <div className="product-footer">
          <p className="product-price">${Number(product.price).toFixed(2)}</p>
          <div className="product-rating">
            <Rating
              value={productRating}
              text={`${productReviews} ${productReviews === 1 ? "review" : "reviews"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
