const joi = require("joi");

module.exports = {
  createTeacher: joi.object().keys({
    department: joi.string().required(),
    experience: joi.number().required(),
    userID: joi.number().required(),
  }),

  updateTeacher: joi.object().keys({
    id: joi.number().required(),
    department: joi.string(),
    experience: joi.number(),
    userID: joi.number().required(),
  }),

  deleteTeacher: joi.object().keys({
    id: joi.number().required(),
  }),

  registerTeacher: joi.object().keys({
    teacherID: joi.number().required(),
    courseID: joi.number().required(),
  }),

  coursesByTeacher: joi.object().keys({
    id: joi.number().required(),
  }),
};
