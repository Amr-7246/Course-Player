import React from 'react';
import { FaClock, FaBook, FaUsers } from 'react-icons/fa';
import { MdLanguage } from "react-icons/md";
import { courses } from '../Data/FakeData';


const CourseMaterials = () => {
  
  return (
    <div className="course-materials">
      <h1 className="font-black  text-black mb-4">Course Material</h1>
      <div className="shadow-lg  shadow-stone-500 rounded-lg bg-white w-full min-h-[200px] p-4">
        {courses.map(course => (
          <div key={course.id} className="text-stone-600">
            <p className="course-materials-p">
              <div className='flex gap-x-2 items-center'>
                <MdLanguage className="text-lg text-teal-700" />
                <span className="font-bold">Language:</span>
              </div>
              <span>{course.language}</span>
            </p>
            <p className="course-materials-p">
              <div className='flex gap-x-2 items-center'>
                <FaClock className="text-lg text-teal-700" />
                <span className="font-bold">Duration:</span>
              </div>
              <span>{course.duration}</span>
            </p>
            <p className="course-materials-p">
              <div className='flex gap-x-2 items-center'>
                <FaBook className="text-lg text-teal-700" />
                <span className="font-bold">Lessons:</span>
              </div>
              <span>{course.lessons}</span>
            </p>
            <p className="course-materials-p">
              <div className='flex gap-x-2 items-center'>
                <FaUsers className="text-lg text-teal-700" />
                <span className="font-bold">Enrolled:</span>
              </div>
              <span>{course.enrolled}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseMaterials;
