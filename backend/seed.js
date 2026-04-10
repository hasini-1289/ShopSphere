const mongoose = require("mongoose");
require('dotenv').config();

const Product = require("./Product");

// 12 sample products across different categories
const products = [
  {
    title: "Wireless Bluetooth Headphones",
    price: 49.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    description:
      "Over-ear wireless headphones with 20 hours of battery life and good bass. Great for daily commute or work from home.",
  },
  {
    title: "Men's Running Shoes",
    price: 64.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    description:
      "Lightweight running shoes with cushioned sole and breathable mesh upper. Available in multiple colors.",
  },
  {
    title: "Stainless Steel Water Bottle",
    price: 19.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    description:
      "1 litre insulated water bottle that keeps drinks cold for 24 hours and hot for 12 hours. Leak-proof lid.",
  },
  {
    title: "Slim Fit Cotton T-Shirt",
    price: 14.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    description:
      "100% cotton slim fit t-shirt. Soft, breathable and great for everyday wear. Available in 6 colors.",
  },
  {
    title: "Mechanical Gaming Keyboard",
    price: 89.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80",
    description:
      "TKL mechanical keyboard with blue switches and RGB backlight. Great for gaming and typing.",
  },
  {
    title: "Non-Stick Frying Pan",
    price: 29.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1584649525599-e55ea91c9c09?w=400&q=80",
    description:
      "24cm non-stick frying pan suitable for all hob types including induction. Easy to clean.",
  },
  {
    title: "Canvas Backpack",
    price: 39.99,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    description:
      "15L canvas backpack with laptop sleeve and multiple pockets. Fits 15 inch laptops comfortably.",
  },
  {
    title: "Denim Jacket",
    price: 54.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80",
    description:
      "Classic denim jacket with button closure and two chest pockets. Unisex style, fits true to size.",
  },
  {
    title: "USB-C Fast Charger",
    price: 24.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1585338035788-c1b9e0c67e6e?w=400&q=80",
    description:
      "65W USB-C fast charger compatible with laptops, tablets and phones. Compact design for travel.",
  },
  {
    title: "Women's Sneakers",
    price: 59.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80",
    description:
      "Comfortable everyday sneakers with memory foam insole. Lightweight and stylish for casual outings.",
  },
  {
    title: "Leather Wallet",
    price: 22.99,
    category: "Bags",
    image: "https://images.unsplash.com/photo-1627123424574-724758594785?w=400&q=80",
    description:
      "Slim bifold leather wallet with 6 card slots and a note compartment. RFID blocking protection.",
  },
  {
    title: "Electric Kettle",
    price: 34.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    description:
      "1.7 litre electric kettle with auto shut-off and boil-dry protection. Boils water in under 3 minutes.",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    // clear existing products first
    await Product.deleteMany({});
    console.log("Old products cleared");

    // insert new ones
    await Product.insertMany(products);
    console.log("12 products seeded successfully!");

    mongoose.disconnect();
  })
  .catch((err) => {
    console.log("Error seeding database:", err);
    mongoose.disconnect();
  });
