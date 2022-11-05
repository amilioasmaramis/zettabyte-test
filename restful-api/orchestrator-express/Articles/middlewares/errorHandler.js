module.exports = (err, req, res, next) => {
  console.log(err, "<<<<<<<:ERROR MASUK DARI ERROR HANDLER");
  console.log(err.name, "<<<<<<:ERROR NAME");
  console.log(err.message, "<<<<<<<:ERROR MSG");
  let statusCode = 500;
  let errorCode = "Internal server error";
  let message = "Unexpected error.";

  switch (err.name) {
    case "error_500":
      statusCode = 500;
      errorCode = "Internal Server Error";
      message = "Internal Server Error";
      break;

    default:
      break;
  }

  res.status(statusCode).json({ errorCode, message });
};
