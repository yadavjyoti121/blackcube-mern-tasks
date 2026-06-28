# Blackcube Store

Blackcube Store is a full-stack MERN product marketplace built for the Blackcube Solution LLC practical assignment.

The application allows users to create an account, login, browse product listings, like and unlike products, manage liked products, add new product listings, edit their own products, view profile details, and logout securely.

The project focuses on clean code structure, practical CRUD functionality, authenticated actions, MongoDB persistence, and a polished responsive React user interface.

## Live Deployment

**Frontend Live URL**

```text
https://blackcube-mern-tasks-git-main-blackcube-jyoti.vercel.app
```

**Backend API URL**

```text
https://blackcube-mern-tasks.onrender.com
```

**API Test URL**

```text
https://blackcube-mern-tasks-git-main-blackcube-jyoti.vercel.app/api/products
```

The frontend is deployed on Vercel and the backend is deployed on Render. Vercel rewrites `/api/*` requests to the Render backend.

## Assignment Compliance

| Requirement                                                          | Status    |
| -------------------------------------------------------------------- | --------- |
| Login screen                                                         | Completed |
| Sign up screen                                                       | Completed |
| Home screen with multiple products displayed                         | Completed |
| Product cards with like and edit options                             | Completed |
| Header navigation with Add Product, Liked Products, and Profile tabs | Completed |
| Add Product functionality                                            | Completed |
| Edit Product functionality                                           | Completed |
| Liked Products page                                                  | Completed |
| User Profile page with logout option                                 | Completed |
| MERN stack usage                                                     | Completed |
| Responsive and clean UI implementation                               | Completed |
| Brief setup instructions in README                                   | Completed |
| Frontend deployment on Vercel                                        | Completed |
| Backend deployment on Render                                         | Completed |
| MongoDB Atlas integration                                            | Completed |

## Highlights

* Modern responsive product marketplace UI
* User registration and login
* Authentication using JWT
* Password hashing with bcryptjs
* MongoDB Atlas database integration
* Product listing with title, price, description, image, likes, and owner reference
* Like and unlike functionality
* Add and edit product flows
* User-specific edit access for owned products
* Liked Products page
* Profile page with account details and logout
* Branded footer for Blackcube Solution LLC
* Clean React component and page structure
* Frontend and backend connected using Vercel rewrites

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Vite
* CSS
* Vercel

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* CORS
* Render

### Database

* MongoDB Atlas

## Screenshots

Add project screenshots here before final GitHub submission if desired:

```text
docs/screenshots/home.png
docs/screenshots/login.png
docs/screenshots/signup.png
docs/screenshots/add-product.png
docs/screenshots/edit-product.png
docs/screenshots/liked-products.png
docs/screenshots/profile.png
docs/screenshots/mongodb-products.png
docs/screenshots/mongodb-users.png
```

Recommended screenshots:

* Home page with product cards
* Login page
* Signup page
* Add Product page
* Edit Product page
* Liked Products page
* Profile page
* MongoDB Atlas products collection
* MongoDB Atlas users collection

## Project Structure

```text
blackcube-task/
  backend/
    server.js
    package.json
    .gitignore
  frontend/
    public/
    src/
      assets/
      components/
        Footer.jsx
        Navbar.jsx
        ProductCard.jsx
      pages/
        AddProduct.jsx
        Home.jsx
        LikedProducts.jsx
        Login.jsx
        Profile.jsx
        Signup.jsx
      api.js
      App.jsx
      index.css
      main.jsx
    vercel.json
    package.json
    .gitignore
  README.md
  .gitignore
```

## Getting Started

Follow these steps to run the project locally.

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd blackcube-task
```

## 2. Backend Setup

Go to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

Backend local URL:

```text
http://localhost:5000
```

Backend API example:

```text
http://localhost:5000/api/products
```

## 3. Frontend Setup

Open a new terminal and go to the frontend folder:

```bash
cd frontend
npm install
```

For local development, create a `.env.local` file inside the `frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:5000
```

If you want to use the deployed Render backend locally, use:

```env
VITE_API_BASE_URL=https://blackcube-mern-tasks.onrender.com
```

Start the frontend:

```bash
npm run dev
```

Frontend local URL:

```text
http://localhost:5173
```

## API Configuration

The frontend uses an API helper to build backend URLs.

Example frontend API call:

```js
axios.get(apiUrl("/api/products"));
```

In production, Vercel rewrites `/api/*` requests to the Render backend.

The `frontend/vercel.json` file contains:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://blackcube-mern-tasks.onrender.com/api/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This means the frontend can call:

```text
/api/products
```

and Vercel forwards the request to:

```text
https://blackcube-mern-tasks.onrender.com/api/products
```

## Available Scripts

## Backend Scripts

Run backend in development mode:

```bash
npm run dev
```

Start backend with Node.js:

```bash
npm start
```

## Frontend Scripts

Run frontend in development mode:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## API Endpoints

## Authentication

| Method | Endpoint             | Description                 |
| ------ | -------------------- | --------------------------- |
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login`    | Login and receive JWT token |

## Products

| Method | Endpoint                 | Description            | Auth Required |
| ------ | ------------------------ | ---------------------- | ------------- |
| GET    | `/api/products`          | Get all products       | No            |
| POST   | `/api/products`          | Add a new product      | Yes           |
| PUT    | `/api/products/:id`      | Edit owned product     | Yes           |
| PUT    | `/api/products/like/:id` | Like or unlike product | Yes           |

## Database Collections

The MongoDB database contains two main collections.

## users

* `name`
* `email`
* `password`

## products

* `title`
* `price`
* `description`
* `image`
* `likes`
* `createdBy`

## Deployment Guide

The project is deployed using the following services:

| Part     | Platform      | URL                                                                |
| -------- | ------------- | ------------------------------------------------------------------ |
| Frontend | Vercel        | `https://blackcube-mern-tasks-git-main-blackcube-jyoti.vercel.app` |
| Backend  | Render        | `https://blackcube-mern-tasks.onrender.com`                        |
| Database | MongoDB Atlas | Private connection string                                          |

## Backend Deployment on Render

Required environment variables on Render:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
PORT=5000
```

Render automatically provides the production port through `process.env.PORT`.

The backend should use:

```js
const PORT = process.env.PORT || 5000;
```

## Frontend Deployment on Vercel

The frontend is deployed from the `frontend` folder.

Vercel root directory should be:

```text
frontend
```

Production API connection is handled through `vercel.json` rewrites.

For production, `VITE_API_BASE_URL` is not required in Vercel environment variables because the frontend uses `/api/*` and Vercel forwards the requests to Render.

## Submission Checklist

Before submitting to Blackcube Solution LLC, fill these details:

```text
Live Project URL: https://blackcube-mern-tasks-git-main-blackcube-jyoti.vercel.app
GitHub Repository Link: <add-your-github-repository-link>
Test Login Email: <add-test-login-email>
Test Login Password: <add-test-login-password>
```

Also confirm:

* The live frontend opens correctly.
* The live backend connects to MongoDB Atlas.
* Product listing loads from the database.
* Test user can login.
* New user can sign up.
* Add Product works.
* Edit Product works for owned products.
* Like and unlike works.
* Liked Products page shows saved products.
* Profile page displays user details.
* Logout works correctly.
* API test URL returns products JSON.

## Security Notes

* Do not commit `.env` files.
* Do not expose MongoDB connection strings in the README.
* Use a strong `JWT_SECRET` in production.
* Use deployment environment variables instead of hardcoded secrets.
* Keep MongoDB Atlas credentials private.
* Keep JWT secret private.

## Author

Built by Jyoti Yadav for the Blackcube Solution LLC MERN Stack Developer practical task.
