import config from './src/config/env.js';
import app from './src/app.js';

const PORT = config.port || 3000; // Default to 3000 if PORT is not set in the environment

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
