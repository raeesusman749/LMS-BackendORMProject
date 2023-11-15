const teacherService = require("../../service/teacherService");
const teacherValidation = require("../teacher/teacherValidation");

module.exports = {
  getTeachersController: async (req, res) => {
    try {
      const data = await teacherService.getTeachers();
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  },

  createTeacherController: async (req, res) => {
    try {
      const { error, value } = teacherValidation.createTeacher.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const newTeacher = await teacherService.createTeacher(value);
        res.send(newTeacher);
      }
    } catch (error) {
      console.log(error);
    }
  },

  updateTeacherController: async (req, res) => {
    try {
      const { error, value } = teacherValidation.updateTeacher.validate(
        { id: req.params.id, ...req.body },
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const teacherID = Number(req.params.id);
        const updatedTeacher = value;
        const data = await teacherService.updateTeacher(teacherID, updatedTeacher);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  },

  deleteTeacherController: async (req, res) => {
    try {
      const { error, value } = teacherValidation.deleteTeacher.validate(
        { id: req.params.id },
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const teacherID = Number(value.id);
        const data = await teacherService.deleteTeacher(teacherID);
        res.send(data);
      }
    } catch (error) { }
  },

  registerTeacherController: async (req, res) => {
    try {
      const { error, value } = teacherValidation.registerTeacher.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const { teacherID, courseID } = value;
        const newlyRegistered = await teacherService.registerTeacher(teacherID, courseID);
        return res.send(newlyRegistered);
      }
    } catch (error) {
      console.log(error);
    }
  },

  coursesByTeacherController: async (req, res) => {
    try {
      const { error, value } = teacherValidation.coursesByTeacher.validate(
        { id: req.params.id },
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const teacherID = Number(value.id);
        const data = await teacherService.coursesByTeacher(teacherID);
        res.send(data);
      }
    } catch (error) { }
  },
};
