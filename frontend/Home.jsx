import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import "../styles/home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  // fetch products whenever search or category changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // build query string based on filters
        let url = "http://localhost:5000/api/products?";
        if (search) url += `search=${search}&`;
        if (category && category !== "all") url += `category=${category}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.log("Fetch error:", err);
        setError("Could not load products. Make sure the backend is running.");
      } finally {
        setLoading(false);
      }
    };

    // small debounce for search input
    const timer = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(timer);
  }, [search, category]);

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>All Products</h1>
        <p>Discover great deals across all categories</p>
      </div>

      <div className="filters-row">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter selected={category} onChange={setCategory} />
      </div>

      {loading && <p className="status-msg">Loading products...</p>}
      {error && <p className="status-msg error">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p className="status-msg">No products found.</p>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
