const Course = require('../models/Course');

exports.test = async (req,res)=>{
    res.json({message:"api is working"}) ;
}

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCourseDetails = async (req, res) => {
  try {
    const id = req.params.courseId;
    const course = await Course.findById({_id:id});
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    console.log(req.body);
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.enrollCourse = async (req, res) => {
  try {
    // Enroll logic here
    res.status(200).json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
