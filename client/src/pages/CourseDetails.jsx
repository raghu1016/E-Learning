import React ,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card,Button } from 'flowbite-react';


export default function CourseDetails() {

  const [course,setCourse] = useState(null);
  const { id } = useParams();
    useEffect(()=>{
      const courseDetails = async ()=>{
        try{
          const res = await axios.get(`http://localhost:5000/api/courses/${id}`)
            if(res.statusText){
              setCourse(res.data);
            }
        }
        catch(err){
          console.log(err);
        }
      }
      courseDetails();
    },[])
    // console.log(course);
  return (
    <>
    <div className = ' flex flex-row m-10 gap-20 justify-center'>
    {course && <Card
      className="  max-w-sm"
      // imgAlt="Meaningful alt text for an image that is not purely decorative"
      // imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {`${course.title} By ${course.instructor}`}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
          {course.description}
      </p>
    </Card>}
    <Card className="max-w-sm ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Course Price
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {course.price}
      </p>
      <Button>
        Buy Now
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  

    </div>
    
    </>
  )
}
