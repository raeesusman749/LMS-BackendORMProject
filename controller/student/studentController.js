const studentService = require("../../service/studentService");
const studentValidation = require("../student/studentValidation")

module.exports = {
  getStudents: async (req, res) => {
    try {
        const data = await studentService.getStudents();
    res.send(data);
    } catch (error) {
        console.log(error);
    }
  },

  createStudent: async (req, res) => {
    try {
      const { error, value } = studentValidation.createStudent.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const newStudent = await studentService.createStudent(value);
        return res.send(newStudent);
      }
    } catch (error) {
      console.log(error);
    }
  },

  updateStudent: async (req, res) => {
    try {
      const { error, value } = studentValidation.updateStudent.validate(
        { id: req.params.id, ...req.body },
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const studentID = Number(req.params.id);
        const updatedStudent = value;
        const data = await studentService.updateStudent(studentID, updatedStudent);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const { error, value } = studentValidation.deleteStudent.validate(
        {id: req.params.id},
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const studentID = Number(value.id);
        const data = await studentService.deleteStudent(studentID);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  },

  enrollStudent: async(req, res) => {
    try {
      const { error, value } = studentValidation.enrollStudent.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const {studentID, courseID} = value ;
        const newlyEnrolled = await studentService.enrollStudent(studentID, courseID);
        return res.send(newlyEnrolled);
      }
    } catch (error) {
      console.log(error);
    }
  },

  coursesByStudent: async (req, res) => {
    try {
      const { error, value } = studentValidation.coursesByStudent.validate(
        {id: req.params.id},
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const studentID = Number(value.id);
        const data = await studentService.coursesByStudent(studentID);
        res.send(data);
      }
    } catch (error) {}
  },
  
};
