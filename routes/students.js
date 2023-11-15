var express = require("express");
const {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  enrollStudent,
  coursesByStudent,
} = require("../controller/student/studentController");
var router = express.Router();

/* GET students listing. */
router.get("/get-students", getStudents);
router.post("/create-student", createStudent);
router.delete("/delete-student/:id", deleteStudent);
router.patch("/update-student/:id", updateStudent);
router.post("/enroll-student", enrollStudent);
router.get("/coursesBy-student/:id", coursesByStudent);

module.exports = router;
