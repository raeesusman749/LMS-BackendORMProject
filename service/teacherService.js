const { models } = require("../models");

module.exports = {
  getTeachers: async () => {
    const teachers = await models.teacher.findAll({ include: models.user });
    return teachers;
  },

  createTeacher: async (data) => {
    try {
      const teacher = await models.teacher.create(data);
      return teacher;
    } catch (error) {
      console.log(error);
    }
  },

  updateTeacher: async (teacherID, updatedTeacher) => {
    try {
      const teacher = await models.teacher.findByPk(teacherID);
      if (teacher) {
        teacher.update(updatedTeacher);
        return teacher;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },

  deleteTeacher: async (teacherID) => {
    try {
      const teacher = await models.teacher.findByPk(teacherID);
      if (teacher) {
        teacher.destroy();
        return "Teacher deleted";
      }
    } catch (error) {
      console.log(error);
    }
  },

  registerTeacher: async (teacherID, courseID) => {
    try {
      const newlyRegistered = await models.teacher_course.create({
        teacherID,
        courseID,
      });
      return newlyRegistered;
    } catch (error) {
      console.log(error);
    }
  },

  coursesByTeacher: async (teacherID) => {
    try {
      const coursesByTeacher = await models.teacher.findByPk(teacherID, {
        include: [
          {
            model: models.user,
          },
          {
            model: models.course,
            through: models.teacher_course,
          },
        ],
      });
      if (coursesByTeacher) {
        return coursesByTeacher;
      } else {
        return "No courses being taught by this teacher";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
