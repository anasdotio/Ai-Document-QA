/**
 * Wrap an async Express route handler and forward any thrown errors to `next()`.
 *
 * Usage:
 *   router.get('/foo', asyncHandler(async (req, res) => {
 *     const data = await fetchData();
 *     res.json(data);
 *   }));
 *
 * @param {function} fn Async route handler (req, res, next) => Promise
 * @returns {function} Express middleware that handles rejected promises
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
