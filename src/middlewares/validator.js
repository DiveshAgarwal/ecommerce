/**
 * @param {joi object} schema;
 * @returns throws error if validation failed;
 */

const validator = (schema, vtype = "body") => {
  return (req, res, next) => {
    try {
      let data;
      if (vtype === "query") {
        data = schema.validate(req.query);
      } else if (vtype === "params") {
        data = schema.validate(req.params);
      } else {
        data = schema.validate(req.body);
      }
      if (data.error) {
        const error = new Error("VALIDATION_ERROR");
        error.details = data.error.message;
        throw error;
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  };
};

module.exports = validator;
