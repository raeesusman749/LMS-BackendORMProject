const { models } = require("../models");

module.exports = {
  getStudents: async () => {
    const students = await models.student.findAll({include : models.user});
    return students;
  },

  createStudent: async (data) => {
    
    try {
      const students = await models.student.create(data)
      return students;
    } catch (error) {
      console.log(error);
    }
  },

  updateStudent: async (studentID, updatedStudent) => {
    try {
      const student = await models.student.findByPk(studentID);
      if (student) {
        student.update(updatedStudent);
        return student;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },

  deleteStudent: async (studentID) => {
    try {
      const student = await models.student.findByPk(studentID);
      if (student) {
        student.destroy();
        return "Student deleted";
      }
    } catch (error) {
      console.log(error);
    }
  },

  enrollStudent : async(studentID, courseID) => {
    try {
      const newlyEnrolled = await models.student_course.create({
        studentID,
        courseID
      })
      return newlyEnrolled;
    } catch (error) {
      console.log(error);
    }
  },

  coursesByStudent: async (studentID) => {
    try {
      const coursesByStudent = await models.student.findByPk(studentID, {
        include: [
          {
            model: models.user,
          },
          {
            model: models.course,
            through: models.student_course,
          },
        ],
      });
      if (coursesByStudent) {
        return coursesByStudent;
      } else {
        return "No courses is being enrolled by this student";
      }
    } catch (error) {
      console.log(error);
    }
  }

};
