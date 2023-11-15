const joi = require("joi");

module.exports = {
  createCourse: joi.object().keys({
    name: joi.string().required(),
    description: joi.string().required(),
  }),

  updateCourse: joi.object().keys({
    id: joi.number().required(),
    name: joi.string().required(),
    description: joi.string().required(),
  }),

  deleteCourse: joi.object().keys({
    id: joi.number().required(),
  }),

  getCourseDetail : joi.object().keys({
    id: joi.number().required()
  })
};