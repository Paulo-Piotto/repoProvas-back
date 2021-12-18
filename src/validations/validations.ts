import joi from 'joi';

const testValidation = joi.object({
  name: joi.string().min(3).required(),
  category: joi.string().min(2).max(6).required(),
  subject: joi.string().min(2).required(),
  teacher: joi.string().min(3).required(),
  url: joi.string().required(),
});

export {
  testValidation,
};
