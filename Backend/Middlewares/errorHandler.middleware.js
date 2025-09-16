import { apiError } from "../Utils/apiError.js";
const errorHandler = (err, req, res, next) => {
  if (err instanceof apiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
    });
  }

  console.error("Unexpected Error:", err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

export default errorHandler;