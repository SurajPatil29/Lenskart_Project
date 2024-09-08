function errorHandler(err, req, res, next){
    console.log(err.stack)

    const statusCode = err.statusCode || 500
    const isDevelopment = process.env.NODE_ENV === "development";

    res.status(statusCode).json({
        success: false,
        message: err.message || "An unexpected error occurred",
        ...(isDevelopment && { stack: err.stack })
    });
}

module.exports = errorHandler

// this error handling router use for handling error across the all routes,
// and middleware this middleware we use in index.js in bottom of the code,
// this logic contain how to error responce send and and console the error