const Joi = require("joi");

const sellerIdSchema = Joi.object({
  seller_id: Joi.number().required(),
});

const orderSchema = Joi.object({
  products: Joi.array().items(Joi.number()).min(1).required(),
});

module.exports = {
  sellerIdSchema,
  orderSchema,
};
