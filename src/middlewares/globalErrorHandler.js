import ApiError from '../utils/apiError.js';

/**
 * Global error handling middleware for Express.
 *
 * - Handles instances of ApiError (custom operational errors).
 * - Handles unexpected errors.
 * - In development, includes stack trace and full error object.
 * - In production, hides internal details (only message and status code).
 */
const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const isOperational = err.isOperational === true;
  const env = process.env.NODE_ENV || 'development';

  console.error({
    message: err.message,
    statusCode,
    path: req.originalUrl,
    method: req.method,
    stack: err.stack,
  });

  if (env === 'production') {
    return res.status(statusCode).json({
      status: statusCode.toString().startsWith('4') ? 'fail' : 'error',
      message: isOperational
        ? err.message
        : 'Something went wrong. Please try again later.',
      ...(isOperational && err.errorCode && { code: err.errorCode }),
      ...(isOperational && err.details && { details: err.details }),
    });
  }

  // development / other envs: full details for debugging
  return res.status(statusCode).json({
    status: statusCode.toString().startsWith('4') ? 'fail' : 'error',
    message: err.message,
    errorCode: err.errorCode,
    details: err.details,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
  });
};
// 404 handler — mount right before globalErrorHandler
function notFoundHandler(req, res, next) {
  const err = new Error(
    `Cannot find ${req.method} ${req.originalUrl} on this server`
  );
  err.statusCode = 404;
  err.isOperational = true;
  next(err);
}

export { globalErrorHandler, notFoundHandler };
