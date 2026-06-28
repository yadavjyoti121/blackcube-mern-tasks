# Blackcube Store

Blackcube Store is a full-stack MERN product marketplace built for the Blackcube Solution LLC practical assignment. The application allows users to create an account, login, browse product listings, like products, manage liked products, add new listings, edit their own products, and view profile details with logout support.

The project focuses on clean code structure, practical CRUD-style functionality, authenticated actions, MongoDB persistence, and a polished responsive React user interface.

## Assignment Compliance

| Requirement | Status |
| --- | --- |
| Login screen | Completed |
| Sign up screen | Completed |
| Home screen with multiple products displayed | Completed |
| Product cards with like and edit options | Completed |
| Header navigation with Add Product, Liked Products, and Profile tabs | Completed |
| Add Product functionality | Completed |
| Edit Product functionality | Completed |
| Liked Products page | Completed |
| User Profile page with logout option | Completed |
| MERN stack usage | Completed |
| Responsive and clean UI implementation | Completed |
| Brief setup instructions in README | Completed |

## Highlights

- Modern responsive product marketplace UI
- Authentication using JWT
- Password hashing with bcryptjs
- MongoDB Atlas database integration
- Product listing with title, price, description, image, likes, and owner reference
- Like and unlike functionality
- Add and edit product flows
- User-specific edit access for owned products
- Liked products collection page
- Profile page with account details and logout
- Branded footer for Blackcube Solution LLC
- Clean component/page structure in React

## Tech Stack

**Frontend**

- React.js
- React Router
- Axios
- Vite
- CSS

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

## Screenshots

Add project screenshots here before final GitHub submission if desired:

```text
docs/screenshots/home.png
docs/screenshots/liked-products.png
docs/screenshots/mongodb-products.png
docs/screenshots/mongodb-users.png
```

Recommended screenshots:

- Home page with product cards
- Liked Products page
- Add/Edit Product page
- MongoDB Atlas products collection
- MongoDB Atlas users collection

## Project Structure

```text
blackcube-task/
  backend/
    server.js
    package.json
    .env
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
      App.jsx
      index.css
      main.jsx
    package.json
    .gitignore
  README.md
  .gitignore
```

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd blackcube-task
```

### 2. Backend Setup

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

Backend URL:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## Available Scripts

### Backend

```bash
npm run dev
```

Starts the backend with nodemon.

```bash
npm start
```

Starts the backend with Node.js.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Runs ESLint checks.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |

### Products

| Method | Endpoint | Description | Auth Required |
| --- | --- | --- | --- |
| GET | `/api/products` | Get all products | No |
| POST | `/api/products` | Add a product | Yes |
| PUT | `/api/products/:id` | Edit owned product | Yes |
| PUT | `/api/products/like/:id` | Like or unlike product | Yes |

## Database Collections

The MongoDB database contains two main collections:

**users**

- `name`
- `email`
- `password`

**products**

- `title`
- `price`
- `description`
- `image`
- `likes`
- `createdBy`

## Deployment Guide

Recommended deployment split:

- Frontend: Vercel or Netlify
- Backend: Render, Railway, or another Node.js hosting service
- Database: MongoDB Atlas

Deployment reminders:

- Add backend environment variables on the hosting platform.
- Update frontend API URLs if the backend is deployed to a live domain.
- Keep `.env` files private.
- Test login, add product, edit product, and like product after deployment.

## Submission Checklist

Before submitting to Blackcube Solution LLC, fill these details:

```text
Live Project URL:
GitHub Repository Link:
Test Login Email:
Test Login Password:
```

Also confirm:

- The live frontend opens correctly.
- The live backend connects to MongoDB Atlas.
- Test user can login.
- Product listing loads from the database.
- Add Product works.
- Edit Product works for owned products.
- Like and unlike works.
- Liked Products page shows saved products.
- Profile logout works.

## Security Notes

- Do not commit `.env` files.
- Do not expose MongoDB connection strings in the README.
- Use a strong `JWT_SECRET` in production.
- Use deployment environment variables instead of hardcoded secrets.

## Author

Built by Jyoti Yadav for the Blackcube Solution LLC MERN Stack Developer practical task.



