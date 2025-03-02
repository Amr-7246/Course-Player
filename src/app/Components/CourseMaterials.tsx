import React from 'react';
import { FaClock, FaBook, FaUsers } from 'react-icons/fa';

const CourseMaterials = () => {
  const courses = [
    {
      id: 1,
      language: 'English',
      duration: '10 weeks',
      lessons: 20,
      enrolled: 150,
    },
  ];

  return (
    <div className="w-full  p-5 col-span-2 col-start-1 col-end-3 row-span-1 row-start-2 row-end-3">
      <h1 className="font-black  text-black mb-4">Course Material</h1>
      <div className="shadow-lg  shadow-stone-500 rounded-lg bg-white w-full min-h-[200px] p-4">
        {courses.map(course => (
          <div key={course.id} className="text-stone-600">
            <p className="flex justify-between items-center gap-2 py-2 border-b last:border-none">
              <div className='flex gap-x-2 items-center'>
                <FaClock className="text-lg text-teal-700" />
                <span className="font-bold">Language:</span>
              </div>
              <span>{course.language}</span>
            </p>
            <p className="flex justify-between items-center gap-2 py-2 border-b last:border-none">
              <div className='flex gap-x-2 items-center'>
                <FaClock className="text-lg text-teal-700" />
                <span className="font-bold">Duration:</span>
              </div>
              <span>{course.duration}</span>
            </p>
            <p className="flex justify-between items-center gap-2 py-2 border-b last:border-none">
              <div className='flex gap-x-2 items-center'>
                <FaBook className="text-lg text-teal-700" />
                <span className="font-bold">Lessons:</span>
              </div>
              <span>{course.lessons}</span>
            </p>
            <p className="flex justify-between items-center gap-2 py-2 border-b last:border-none">
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
