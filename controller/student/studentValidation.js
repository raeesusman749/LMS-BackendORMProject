const joi = require("joi");

module.exports = {
  createStudent: joi.object().keys({
    age: joi.number(),
    gender: joi.string(),
    userID: joi.number().required(),
  }),

  updateStudent: joi.object().keys({
    id: joi.number().required(),
    age: joi.number(),
    gender: joi.string(),
    userID: joi.number().required(),
  }),

  deleteStudent: joi.object().keys({
    id: joi.number().required(),
  }),

  enrollStudent : joi.object().keys({
    studentID : joi.number().required(),
    courseID : joi.number().required(),
  }),

  coursesByStudent: joi.object().keys({
    id: joi.number().required(),
  }),

};
