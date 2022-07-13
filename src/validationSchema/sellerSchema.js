const Joi = require("joi");

const catalogSchema = Joi.object({
  catalogName: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productName: Joi.string().required(),
        price: Joi.number().required(),
      })
    )
    .min(1).required(),
});

module.exports = {
  catalogSchema,
};
