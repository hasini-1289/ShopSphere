# ShopSphere

ShopSphere is a full-stack MERN-style e-commerce practice project.

It includes a product catalog, search and category filtering, product details, and a persistent shopping cart using localStorage.

## Current Features

- Product listing from backend API
- Search products by title via URL route (`/search/:keyword`)
- Filter products by category
- Product details page (`/product/:id`)
- Add to cart from product page
- Increment, decrement, and remove cart items
- Cart totals calculation (items and price)
- Cart persistence in browser localStorage
- Responsive UI with a custom polished storefront layout

## Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Axios
- React Bootstrap components
- Bootswatch Litera theme (via CDN)
- Font Awesome (via CDN)
- Custom CSS in `src/index.css` and `src/App.css`

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- CORS + dotenv

## Project Structure (Actual)

```text
ShopSphere/
├── backend/
│   ├── .env.example
│   ├── package.json
│   ├── Product.js
│   ├── productController.js
│   ├── productRoutes.js
│   ├── seed.js
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── components/
│       ├── context/
│       └── pages/
└── README.md
```

## Environment Variables

Create `backend/.env` using `backend/.env.example`:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Run Locally

### 1. Clone

```bash
git clone https://github.com/hasini-1289/ShopSphere.git
cd ShopSphere
```

### 2. Start Backend

```bash
cd backend
npm install
npm run seed
npm run dev
```

Backend runs at:

- `http://localhost:5000`

### 3. Start Frontend (new terminal)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

- `http://localhost:5173`

The frontend is configured to proxy `/api` calls to `http://localhost:5000` (see `frontend/vite.config.js`).

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health check text response |
| GET | `/api/products` | Get all products |
| GET | `/api/products?search=headphones` | Search products by title |
| GET | `/api/products?category=Electronics` | Filter by category |
| GET | `/api/products?search=shoe&category=Footwear` | Search + category filter |
| GET | `/api/products/:id` | Get a single product by MongoDB id |

## Data Model (Product)

Current product schema fields:

- `title` (string, required)
- `price` (number, required)
- `category` (string, required)
- `image` (string, required)
- `description` (string, required)

## Notes

- Sample data is inserted through `backend/seed.js`.
- Cart state is fully client-side and persisted in localStorage.
- Authentication and checkout/payment are not implemented yet.

## Author

Built by Hasini as a learning project.
