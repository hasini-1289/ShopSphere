// list of categories - could also be fetched from backend later
const categories = ["all", "Electronics", "Clothing", "Footwear", "Kitchen", "Bags"];

function CategoryFilter({ selected, onChange }) {
  return (
    <div className="category-filter">
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "all" ? "All Categories" : cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
