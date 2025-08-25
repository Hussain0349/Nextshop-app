# NexShop - E-Commerce REST API

A robust, scalable, and feature-rich RESTful API powering a modern e-commerce platform. Built with Node.js, Express, and MongoDB, this API provides all the necessary endpoints for a full-featured online store, including user authentication, product management, shopping cart, order processing, and payment integration.

## 🚀 Features

- **User Authentication & Authorization**: JWT-based secure login/register with role-based access (Customer, Admin).
- **Product Management**: Full CRUD operations for products with filtering, sorting, search, and pagination.
- **Shopping Cart**: Users can add, update, and remove items from their persistent cart.
- **Order System**: Complete order lifecycle management (Create, Read, Update status).
- **Payment Integration**: Secure payment processing using the Stripe API.
- **Reviews & Ratings**: Users can leave reviews and ratings for products.
- **File Upload**: Admin can upload product images via Cloudinary integration.
- **Error Handling**: Centralized and consistent error handling across the entire API.
- **Security Best Practices**: Password hashing, rate limiting, security headers, and data sanitization.

## 🛠️ Tech Stack

- **Backend Framework**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **File Upload**: Multer + Cloudinary
- **Payment Processing**: Stripe API
- **Security**: bcryptjs, helmet, cors, express-rate-limit
- **Validation**: express-validator

## 📦 API Endpoints Summary

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Register a new user | Public |
| `POST` | `/api/v1/auth/login` | Login a user | Public |
| `GET` | `/api/v1/auth/logout` | Logout a user | Private |
| `GET` | `/api/v1/user` | Get current user profile | Private |
| `PATCH` | `/api/v1/user/updateUser` | Update user details | Private |
| `GET` | `/api/v1/products` | Get all products (with filters) | Public |
| `GET` | `/api/v1/products/:id` | Get a single product | Public |
| `POST` | `/api/v1/products` | Create a new product | Private (Admin) |
| `PATCH` | `/api/v1/products/:id` | Update a product | Private (Admin) |
| `DELETE` | `/api/v1/products/:id` | Delete a product | Private (Admin) |
| `GET` | `/api/v1/cart` | Get user's cart | Private |
| `POST` | `/api/v1/cart` | Add item to cart | Private |
| `PATCH` | `/api/v1/cart/:itemId` | Update cart item quantity | Private |
| `DELETE` | `/api/v1/cart/:itemId` | Remove item from cart | Private |
| `POST` | `/api/v1/orders` | Create a new order from cart | Private |
| `GET` | `/api/v1/orders` | Get user's orders | Private |
| `GET` | `/api/v1/orders/:id` | Get order by ID | Private |
| `POST` | `/api/v1/reviews` | Create a review for a product | Private |
| `GET` | `/api/v1/reviews/:productId` | Get reviews for a product | Public |
| `POST` | `/api/v1/stripe/create-payment-intent` | Create Stripe Payment Intent | Private |

## 🗄️ Database Models

- **User**: `{ name, email, password, role, address, cart }`
- **Product**: `{ name, price, description, image, category, company, colors, inventory, averageRating }`
- **Review**: `{ rating, title, comment, user, product }`
- **Order**: `{ orderItems, totalPrice, status, user, shippingAddress, paymentResult }`
- **Cart**: `{ items: [{ product, quantity, price }], total, user }`

## 🔧 Installation & Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas URI or a local MongoDB instance
- Stripe Account for payment processing
- Cloudinary Account for image storage

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextshop-api.git
cd nextshop-api