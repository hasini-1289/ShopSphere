const Product = require("./Product");

// get all products - also handles search and category filter via query params
const getAllProducts = async (req, res) => {
  try {
    const { search, category } = req.query;

    let filter = {};

    // if category is passed and its not "all", filter by it
    if (category && category !== "all") {
      filter.category = category;
    }

    // if search is passed, do a case-insensitive search on title
    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    console.log("Error fetching products:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// get a single product by id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.log("Error fetching product:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getAllProducts, getProductById };
