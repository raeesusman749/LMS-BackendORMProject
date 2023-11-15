var express = require('express');
const { getCourses, createCourse, updateCourse, deleteCourse, getCourseDetail } = require('../controller/courses/courseController');
var router = express.Router();


/* GET courses listing. */
router.get('/get-courses', getCourses);
router.get('/get-courseDetail/:id', getCourseDetail);
router.post('/create-course', createCourse);
router.delete('/delete-course/:id', deleteCourse);
router.patch('/update-course/:id', updateCourse);


module.exports = router;