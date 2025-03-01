'use client';
import React, { useEffect, useState } from "react";
import { FaBook, FaFileCode, FaTasks, FaPlayCircle } from "react-icons/fa";

const CourseTopics = () => {
  const [progress, setProgress] = useState(0);
  const fakeProgress = 75; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(fakeProgress);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  const topics = [
    {
      week: "Week 1-4",
      details: [
        { title: "Introduction", icon: <FaPlayCircle /> },
        { title: "Course Overview", icon: <FaBook /> },
        { title: "Exercises", icon: <FaTasks /> },
        { title: "Reference Files", icon: <FaFileCode /> },
      ],
    },
    {
      week: "Week 5-8",
      details: [
        { title: "Advanced Concepts", icon: <FaPlayCircle /> },
        { title: "Project Setup", icon: <FaBook /> },
        { title: "Hands-on Practice", icon: <FaTasks /> },
        { title: "Code Editor Setup", icon: <FaFileCode /> },
      ],
    },
    {
      week: "Week 8-9",
      details: [
        { title: "Final Review", icon: <FaPlayCircle /> },
        { title: "Exam Preparation", icon: <FaBook /> },
        { title: "Submission Guidelines", icon: <FaTasks /> },
        { title: "Final Project Files", icon: <FaFileCode /> },
      ],
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-6  shadow-lg rounded-lg  col-span-1 col-start-3 col-end-4 row-span-3 row-start-1 row-end-4  ">

      {/* Course Topics */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Topics</h1>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Course Topics */}
      <div className="grid gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white border border-stone-600 w-[100%] p-4 rounded-lg "
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              {topic.week}
            </h2>
            <ul className="space-y-2">
              {topic.details.map((detail, i) => (
                <li key={i} className="flex items-center gap-2 py-3 border-b border-stone-600 last:border-none text-stone-600">
                  {detail.icon}
                  {detail.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTopics;
