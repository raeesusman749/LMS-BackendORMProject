const courseService = require("../../service/courseService");
const courseValidation = require("../courses/courseValidation")

module.exports = {
  getCourses: async (req, res) => {
    try {
        const data = await courseService.getCourses();
    res.send(data);
    } catch (error) {
        console.log(error);
    }
  },

  createCourse: async (req, res) => {
    try {
      const { error, value } = courseValidation.createCourse.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const newCourse = await courseService.createCourse(value);
        return res.send(newCourse);
      }
    } catch (error) {
      console.log(error);
    }
  },

  updateCourse: async (req, res) => {
    try {
      const { error, value } = courseValidation.updateCourse.validate(
        { id: req.params.id, ...req.body },
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const courseID = Number(req.params.id);
        const updatedCourse = value;
        const data = await courseService.updateCourse(courseID, updatedCourse);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const { error, value } = courseValidation.deleteCourse.validate(
        {id: req.params.id},
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const courseID = Number(value.id);
        const data = await courseService.deleteCourse(courseID);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  },
  getCourseDetail : async(req, res) => {
    try {
      const { error, value } = courseValidation.getCourseDetail.validate(
        {id: req.params.id},
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const courseID = Number(value.id);
        const data = await courseService.getCourseDetail(courseID);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};