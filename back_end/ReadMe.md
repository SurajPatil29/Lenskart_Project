# Lenskart Webpage Clone - Backend

This project is the backend server for the Lenskart webpage clone, implemented using Node.js, Express, and MongoDB. It handles user authentication, product management, cart and favorites functionality, image uploads, and more. This `README.md` provides an overview of the project structure, key functionalities, and instructions for setting up and running the backend server.

## Table of Contents

- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Middlewares](#middlewares)
- [Models](#models)
- [Routes](#routes)
- [Utilities](#utilities)


## Project Structure

The backend project is organized into the following folders and files:

- `config/` - Contains the configuration files for the database connection.
- `middlewares/` - Contains custom and third-party middleware for request handling.
- `models/` - Contains Mongoose models that define the schema for the MongoDB collections.
- `routes/` - Contains route handlers for different API endpoints.
- `utils/` - Contains utility functions for reusable code across the project.
- `index.js` - The entry point for the Express server.
- `.gitignore` - Specifies files and directories to be ignored by Git.
- `package.json` - Lists the project dependencies and scripts.

## Configuration

- **Database Configuration (`config/db.js`)**: Handles the connection to the MongoDB database using Mongoose. Make sure to update the MongoDB connection string in the `.env` file.

## Middlewares

The middleware functions in this project help manage various functionalities such as authentication, validation, error handling, and request logging.

1. **`authentication`**: Verifies if a user is logged in by checking the JWT token in the request headers. This middleware is crucial for protecting routes that require authentication.

2. **`errorHandler`**: Centralized error handling middleware that captures and processes errors, removing repetitive error handling code from route handlers.

3. **`loginValidation`**: Validates user login data using Joi to ensure correct data is sent in the request, preventing invalid requests from hitting the server.

4. **`morgan`**: Logs HTTP requests to the console, useful for debugging and monitoring traffic. It is an external middleware used to log details about incoming requests.

5. **`multer`**: Handles file uploads, specifically for user profile images. Integrates with Cloudinary to store images and uses `multer-storage-cloudinary` for seamless integration.

6. **`signupValidation`**: Validates user signup data using Joi to ensure that the input data meets the required criteria before processing.

7. **`sortingAndPagination`**: Applies sorting and pagination logic to product queries, reducing repetitive code across route handlers.

## Models

The Mongoose models define the schema and structure of the MongoDB collections used in the project.

1. **`Cart`**: Contains a user ID and an array of products, representing the items in a user's cart.

2. **`Favorite`**: Similar to the `Cart` model but represents the user's favorite products, stored in a separate collection.

3. **`Home`**: Fetches data from the home collection to display on the homepage.

4. **`Product`**: Manages all product-related data in the products collection, including fetching, sorting, and pagination.

5. **`Signup`**: Handles user signup and login by creating and updating user details in the user collection.

6. **`Token`**: Stores expired tokens when a user logs out, used in the authentication process to verify the validity of tokens.

## Routes

The Express routes define the API endpoints for the application.

1. **`Cart`**: Handles adding, retrieving, and deleting products in the user's cart collection.

2. **`Favorite`**: Similar to the cart route but manages the user's favorite products.

3. **`Eyeglasses`, `Kidsglasses`, `Screenglasses`**: Fetch and display products from the `products` collection based on specific criteria, with support for sorting and pagination.

4. **`Profile`**: Allows users to upload and update their profile images, which are saved in the database and hosted on Cloudinary.

5. **`Signup`**: Manages user signup, login, and logout processes. It includes data validation and token management.

6. **`Search`**: Handles search queries for products, allowing users to find items based on keywords and filters.

## Utilities

Utility functions provide reusable code components that simplify and streamline the codebase.

1. **`cloudinary.js`**: Configures Cloudinary for image storage and retrieval.

2. **`createProduct.js`**: A helper function that returns product data based on provided arguments.

3. **`fetchProduct.js`**: Defines conditions and fetches products from the database based on those conditions.

