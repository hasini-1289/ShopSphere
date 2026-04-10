import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCartHandler = () => {
    addToCart(product);
  };

  const productTitle = product.title || product.name || "Untitled Product";
  const productRating = Number(product.rating || 0);
  const productReviews = Number(product.numReviews || 0);
  const inStock = product.countInStock === undefined || product.countInStock > 0;

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="row product-page">
          <div className="col-md-6">
            <div className="product-media">
              <img src={product.image} alt={productTitle} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-3">
            <ul className="list-group list-group-flush panel">
              <li className="list-group-item">
                <h3>{productTitle}</h3>
              </li>
              <li className="list-group-item">
                <Rating
                  value={productRating}
                  text={`${productReviews} ${productReviews === 1 ? "review" : "reviews"}`}
                />
              </li>
              <li className="list-group-item">Price: ${product.price}</li>
              <li className="list-group-item">
                Description: {product.description}
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="card panel">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Price:</div>
                    <div className="col">
                      <strong>${product.price}</strong>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Status:</div>
                    <div className="col">{inStock ? "In Stock" : "Out Of Stock"}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <button
                    onClick={addToCartHandler}
                    className="btn btn-primary btn-block"
                    type="button"
                    disabled={!inStock}
                  >
                    Add To Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
