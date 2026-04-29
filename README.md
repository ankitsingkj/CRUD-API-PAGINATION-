CRUD API with Pagination, JWT Authentication & Email Service
📌 Project Description

This project is a REST API built using Node.js and Express.js.
It provides user management with authentication, pagination, and email sending functionality.
The API supports creating users, login with JWT, sending emails to groups, and handling large dataset



Features
User Registration & Login (JWT Authentication)
CRUD Operations (Create, Read, Update, Delete)
Pagination for large user data
Add Multiple Users (Bulk Insert)
Group Creation and Group Email Sending
Email Sending using Nodemailer
Protected Routes using Middleware
MongoDB Database Integration
Environment Variable Configuration (.env)

🛠️ Tech Stack
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Token)
Nodemailer
Postman (API Testing)
Git & GitHub


Project Structure

project/
│
├── config/
│ ├── db.js
│ └── mailer.js
│
├── controllers/
│ ├── userController.js
│ ├── authController.js
│ ├── emailController.js
│ ├── groupController.js
│ └── addThousandUsers.js
│
├── middleware/
│ └── authMiddleware.js
│
├── models/
│ ├── userModel.js
│ └── groupModel.js
│
├── routes/
│ ├── userRoutes.js
│ ├── authRoutes.js
│ ├── emailRoutes.js
│ └── groupRoutes.js
│
├── utils/
│ └── generateToken.js
│
├── server.js
└── .env


🔐 Environment Variables (.env)

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password



Installation & Setup
Clone the repository

git clone https://github.com/ankitsingkj/CRUD-API-PAGINATION-.git

Install dependencies

npm install

Start the server

npm start

Server will run on:

http://localhost:5000


API Endpoints
User Routes

POST /api/register
POST /api/login
GET /api/users
GET /api/users?page=1&limit=10
PUT /api/users/
DELETE /api/users/


Group Routes

POST /api/group
GET /api/group

Email Routes

POST /api/send-email
POST /api/send-group-email

📊 Pagination Example

GET /api/users?page=1&limit=10

🔑 Authentication

JWT token is required for protected routes.

Example header:  ## 🆕 Latest Updates (Today)

The following enhancements and improvements were added to the project:

### ✅ Validation Added

* Field validation implemented for:

  * Name
  * Email
  * Password
  * Contact
* Proper error messages returned for missing or invalid fields.
* Status codes used:

  * `400` for validation errors
  * `404` for not found
  * `500` for server errors

### 🗑️ Deleted Users Collection

* Implemented a separate collection to store deleted users.
* When a user is deleted:

  * User data is first saved into `deletedUsers` collection.
  * Then removed from the main `users` collection.
* Helps maintain data history and recovery.

### 🔐 Token Management

* Token handling improved for authentication and testing.
* Token-related data stored in a dedicated collection.
* Secure JWT verification added using middleware.

### 📄 Pagination Enhancements

* Pagination optimized for large datasets.
* Added query parameters:

  * `page`
  * `limit`
  * `search`
  * `filter`
* Response now includes:

  * `total`
  * `page`
  * `limit`
  * `totalPages`

### 📧 Email Service Improvements

* Email sending verified using Nodemailer.
* Preview URL generated for testing emails.
* Group email sending functionality stabilized.

### 🧪 Bulk User Insert

* Script added to insert large datasets.
* Example:

  * Add 1000 users automatically.
* Useful for testing pagination and performance.

### 🛡️ Error Handling

* Improved error handling using try-catch blocks.
* Consistent JSON error responses implemented.

### 🔧 Git & Version Control

* Repository synchronized with GitHub.
* Proper workflow followed:

  * `git pull --rebase`
  * `git push`
* Commit history maintained for updates.

### 📦 Project Stability Improvements

* MongoDB connection verified.
* Environment variables properly configured.
* Server startup logs improved.

---

## 🚀 Current Project Status

* CRUD Operations — Completed
* JWT Authentication — Completed
* Pagination — Completed
* Email Service — Completed
* Validation — Completed
* Deleted User Backup — Completed
* Bulk Insert — Completed
* GitHub Integration — Completed

Project is now **production-ready backend API** for learning and deployment.


Authorization: Bearer your_token_here
 
