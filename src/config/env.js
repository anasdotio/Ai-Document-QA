import 'dotenv/config';

/**
 * Centralized configuration object that pulls values from the environment.
 * Add any additional variables here as your project grows.
 */

if (!process.env.PORT) {
  console.warn(
    'Warning: PORT is not set in the environment. Defaulting to 3000.'
  );
}

const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
};

export default config;
