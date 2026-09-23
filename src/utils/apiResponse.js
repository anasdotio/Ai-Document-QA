/**
 * Standard API response helper.
 *
 * @param {object} res Express response object
 * @param {object} options
 * @param {any} [options.data] Payload to send
 * @param {string} [options.message='Success'] Human‑readable message
 * @param {number} [options.status=200] HTTP status code
 */
export default class ApiResponse {
  /**
   * Send a JSON response with a consistent shape.
   *
   * @param {object} res Express response object
   * @param {object} options
   * @param {any} [options.data] Payload to send
   * @param {string} [options.message='Success'] Human‑readable message
   * @param {number} [options.status=200] HTTP status code
   */

  constructor(statusCode = 200, message, data = null) {
    this.data = data;
    this.message = message;
    this.status = statusCode.toString().startsWith('4') ? 'fail' : 'success';
  }
}
