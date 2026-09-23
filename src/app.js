import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

/**
 * @route GET /health
 * @desc Health check endpoint
 * @access Public
 */
app.get('/health', (req, res) => {
  return res.status(200).json({ message: 'Healthy', status: 'success' });
});

export default app;
