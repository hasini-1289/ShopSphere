import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  const { keyword } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `/api/products?search=${keyword || ""}&category=${category}`
        );
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/products");
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategories(["all", ...uniqueCategories]);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [keyword, category]);

  return (
    <section className="home-page">
      <div className="home-hero">
        <h1>Discover Beautiful Everyday Essentials</h1>
        <p>Curated finds with clean design, honest pricing, and fast checkout.</p>
      </div>

      <div className="catalog-filter">
        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage;
