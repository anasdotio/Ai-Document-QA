import winston from 'winston';

const { combine, timestamp, printf, json, colorize, errors } = winston.format;

const env = process.env.NODE_ENV || 'development';

// Production format: JSON with timestamps and stack traces
const prodFormat = combine(
  timestamp(),
  errors({ stack: true }),
  json()
);

// Development format: colored, human‑readable output
const devFormat = combine(
  colorize(),
  timestamp(),
  printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  })
);

const logger = winston.createLogger({
  level: env === 'production' ? 'info' : 'debug',
  format: env === 'production' ? prodFormat : devFormat,
  transports: [new winston.transports.Console()],
  // In production you might also want file transports, e.g.:
  // new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
  exitOnError: false,
});

export default logger;
