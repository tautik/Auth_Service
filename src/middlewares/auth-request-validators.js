const validateUserAuth = (req, res, next) => {
  //if no email or passsword given then through error
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: "Email or password missing in the request",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
};
