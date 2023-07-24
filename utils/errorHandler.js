// utils/errorHandler.js

// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Set a default status code for the error response
    let statusCode = 500;
  
    // Check if the error has a specific status code (e.g., 400, 404, etc.)
    if (err.statusCode) {
      statusCode = err.statusCode;
    }
  
    // Return the error response with the appropriate status code
    res.status(statusCode).json({ error: err.message });
  };
  
  module.exports = errorHandler;
  