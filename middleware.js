// Logging + error-handling middleware (Express)
const logger = (req, res, next) => {
  console.log(req.method + " " + req.path);
  next();
};

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({ error: { message: err.message } });
};

module.exports = { logger, errorHandler };
