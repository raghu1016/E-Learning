const express = require('express');
const router = express.Router();
const {test, getAllCourses, createCourse, enrollCourse,getCourseDetails } = require('../controllers/course.controller');
const {login,register,signout} = require('../controllers/auth.controller');
const { authenticateUser } = require('../middleware/auth');

// Courses Routes
router.get('/test',test);
router.get('/courses', getAllCourses);
router.get('/courses/:courseId',getCourseDetails);
router.post('/courses', authenticateUser, createCourse);
router.post('/courses/:id/enroll', authenticateUser, enrollCourse);
router.post('/courses/login',login);
router.post('/courses/signup',register);
router.post('/courses/signout',signout);

module.exports = router;
