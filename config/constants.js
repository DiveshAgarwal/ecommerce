require("dotenv").config();

//------------------------------- Error messages --------------------------------//
const errors = {
  ERR_UNEXPECTED: { message: "Unexpected Error", status_code: 500 },
  ERR_EMAIL_EXISTS: { message: "User with the email already exists", status_code: 400 },
  ERR_EMAIL_NOT_EXISTS: { message: "Invalid user credentials", status_code: 404 },
  ERR_PWD_INCORRECT: { message: "Invalid user credentials", status_code: 404 },
  ERR_UTYPE_INCORRECT: { message: "Invalid user credentials", status_code: 404 },
};

module.exports = {
  errors,
};
