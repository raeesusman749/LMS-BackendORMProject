var express = require("express");
const {
  getTeachersController,
  createTeacherController,
  updateTeacherController,
  registerTeacherController,
  deleteTeacherController,
  coursesByTeacherController,
} = require("../controller/teacher/teacherController");
var router = express.Router();

/* GET teachers listing. */
router.get("/get-teachers", getTeachersController);
router.post("/create-teacher", createTeacherController);
router.delete("/delete-teacher/:id", deleteTeacherController);
router.patch("/update-teacher/:id", updateTeacherController);
router.post("/register-teacher", registerTeacherController);
router.get("/coursesBy-teacher/:id", coursesByTeacherController);

module.exports = router;
