export default class ApiError extends Error {
  /**
   * @param {number} statusCode HTTP status code for the error
   * @param {string} message Human‑readable error message
   * @param {boolean} isOperational Whether this is an expected (operational) error
   */
  constructor(statusCode, message, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    // Capture stack trace (excluding this constructor)
    Error.captureStackTrace(this, this.constructor);
  }
}
