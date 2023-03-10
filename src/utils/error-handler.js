const { StatusCodes } = require("http-status-codes");
//we imported as common js moduling here
class AppErrors extends Error {
  constructor(
    name = "AppError", //if no error.name passed then use it
    message = "Something went wrong",
    explanation = "Something went wrong",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR //status code displayed here
  ) {
    super(); //used here to use Error default class provided properties
    (this.message = message),
      (this.explanation = explanation),
      (this.name = name),
      (this.statusCode = statusCode);
  }
}

module.exports = AppErrors;
