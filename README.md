# ShopSphere 🛒

A full-stack e-commerce web application built as a personal project to practice MERN stack development.

## What is this?

ShopSphere is a simple online store where users can browse products, filter by category, search by name, and manage a shopping cart. The cart data is saved in localStorage so it persists even after refreshing the page.

I built this to get hands-on experience with React, Node.js, Express, and MongoDB all working together.

---

## Features

- Browse products fetched from a real backend API
- Search products by name (debounced)
- Filter products by category using a dropdown
- Add products to cart
- Increase / decrease quantity in cart
- Remove items from cart
- Cart total calculated automatically
- Cart saved in localStorage (persists on refresh)
- Responsive layout — works on mobile too

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Plain CSS (no Tailwind or Bootstrap)
- Context API for cart state

**Backend**
- Node.js
- Express
- MongoDB + Mongoose

---

## Project Structure

```
shopsphere/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── seed.js
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── context/
        ├── pages/
        └── styles/
```

---

## How to Run Locally

### Prerequisites
- Node.js installed
- MongoDB running locally (or use MongoDB Atlas)

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/shopsphere.git
cd shopsphere
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/shopsphere
```

Seed the database with sample products:
```bash
npm run seed
```

Start the backend server:
```bash
npm run dev
```

The API will be running at `http://localhost:5000`

### 3. Setup Frontend

Open a new terminal tab:
```bash
cd frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products?search=shoes` | Search products |
| GET | `/api/products?category=Electronics` | Filter by category |
| GET | `/api/products/:id` | Get single product |

---

## Screenshots

> Add your screenshots here once you run the app

---

## What I Learned

- How to connect a React frontend to a Node/Express backend
- Using Mongoose to define schemas and query MongoDB
- Managing global state with Context API
- Persisting data with localStorage
- Building responsive layouts with CSS Grid and Flexbox
- Structuring a real full-stack project properly

---

## Future Improvements

- Add user authentication (login/signup)
- Product detail page
- Payment integration (Stripe maybe)
- Order history
- Admin panel to add/edit products

---

## Author

Made by [Your Name] — feel free to fork and build on it!
