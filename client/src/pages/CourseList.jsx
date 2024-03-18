import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function CourseList() {
    const [courses,setCourses] = useState([])
useEffect(() => {
    const courseList = async ()=>{
        //  await axios.get('http://localhost:5000/api/courses').then(res => {
        //     setCourses(res.data);
        //     })
        //     .catch(err => console.log(err));
        try{
            const res = await axios.get('http://localhost:5000/api/courses');

            if(res.statusText){
                setCourses(res.data);
                console.log(courses);

            }
        }
        catch(err){
            console.log(err);
        }
        
    }
    courseList();
    }, []);
  return (
    <div className=''>
    <h1 className='text-2xl font-bold mt-10 ml-5 text-center'>Available Courses</h1>
    <div className = 'flex m-10 p-10 justify-center'>
      {/* <ul>
        {courses.map(course => (
          <li key={course._id}>{course.title} - {course.instructor}</li>
        ))}
      </ul> */}
        {courses.map(course => (
          <Link to={`/courses/${course._id}`}>
          <Card  key={course._id} className="flex-wrap max-w-sm p-3 m-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {course.title} - {course.instructor}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {course.description}
        </p>
        <Button>
            View
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
            </svg>
        </Button>
      </Card>
      </Link>
        ))}
      
    </div>
    </div>
  )
}
