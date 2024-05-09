# internship-problem-backend
short problem

1. Basic CRUD API with In-Memory Data Storage:
Create a Node.js application using Express.js.
Design an API with endpoints for:
GET /products: List all products (can be a simple array of objects in memory).
POST /products: Create a new product with name, description, and price (data stored in memory).
GET /products/:id: Retrieve a specific product by its ID.
PUT /products/:id: Update an existing product's details.
DELETE /products/:id: Delete a product by its ID.
Use an in-memory array to store product data initially (e.g., const products = []).
Implement basic error handling (e.g., return appropriate HTTP status codes for success and errors).


2. User Authentication with JWT:

Create a Node.js application using Express.js.
Implement user registration with username and password (store credentials in memory for simplicity).
Build an API endpoint for user login that returns a JSON Web Token (JWT) upon successful authentication.
Use a library like jsonwebtoken to generate and verify JWTs.
Create a middleware function to protect specific API endpoints (e.g., product CRUD endpoints) by verifying the presence and validity of the JWT in the request header.
