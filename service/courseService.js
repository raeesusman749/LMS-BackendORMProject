const { models } = require("../models");

module.exports = {
  getCourses: async () => {
    const courses = await models.course.findAll();
    return courses;
  },

  createCourse: async (data) => {
    
    try {
      const courses = await models.course.create(data)
      return courses;
    } catch (error) {
      console.log(error);
    }
  },

  updateCourse: async (courseID, updatedCourse) => {
    try {
      const course = await models.course.findByPk(courseID);
      if (course) {
        course.update(updatedCourse);
        return course;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },

  deleteCourse: async (courseID) => {
    try {
      const course = await models.course.findByPk(courseID);
      if (course) {
        course.destroy();
        return "Course deleted";
      }
    } catch (error) {
      console.log(error);
    }
  },

  getCourseDetail: async (courseID) => {
    try {
      const course = await models.course.findByPk(courseID);
      if (course) {
        return course;
      } else {
        return "No course available"
      }
    } catch (error) {
      console.log(error);
    }
  },
};
