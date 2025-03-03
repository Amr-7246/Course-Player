'use client';
import React, { useEffect, useState, useRef } from "react";
import { FaBook, FaFileCode, FaTasks, FaPlayCircle, FaPlus, FaMinus } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import useStore from "../context/useStore";
import { useVideo } from "../context/VideoContext";

const CourseTopics: React.FC = () => {
  const [progress, setProgress] = useState(75);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [openCards, setOpenCards] = useState<Record<number, boolean>>({});
  const fakeProgress = 75;
  const { dispatch } = useStore();
  const { isFullScreenForLargeS } = useVideo();

  // Intersection Observer effect to start the progress only when visible.
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && progress === 0) {
          // Start incrementing the progress.
          interval = setInterval(() => {
            setProgress((prev) => {
              if (prev < fakeProgress) {
                return prev + 1;
              } else {
                clearInterval(interval);
                return prev;
              }
            });
          }, 20); // Adjust the interval timing as needed.
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.5, // Trigger when 50% of the element is visible.
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    // Cleanup: unobserve the element and disconnect observer
    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
      observer.disconnect();
      clearInterval(interval);
    };
  }, [progress]);

  // Toggle the open state of a specific card
  const handleCardToggle = (index: number) => {
    setOpenCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Update context state (as in your original code)
  const handleClick = (whichOppend: string) => {
    dispatch({
      type: "SET_OPPEND",
      payload: {
        isOppend: true,
        whichOppend: whichOppend,
      },
    });
  };

  // Topics with week details.
  const topics = [
    {
      week: "Week 1-4",
      description: "Overview of fundamentals and introduction to the course structure.",
      details: [
        { title: "Introduction", icon: <FaPlayCircle /> },
        { title: "Course Overview", name: "PDF", icon: <FaBook /> },
        { title: "Exercises", icon: <FaTasks /> },
        { title: "Reference Files", icon: <FaFileCode /> },
        { title: "Exam on Embedding Php in HTML", name: "Exam", icon: <FaFileCode /> },
      ],
    },
    {
      week: "Week 5-8",
      description: "Deep dive into advanced concepts and practical applications.",
      details: [
        { title: "Advanced Concepts", icon: <FaPlayCircle /> },
        { title: "Project Setup", icon: <FaBook /> },
        { title: "Hands-on Practice", icon: <FaTasks /> },
        { title: "Code Editor Setup", icon: <FaFileCode /> },
      ],
    },
    {
      week: "Week 8-9",
      description: "Final review, exam preparation, and submission guidelines.",
      details: [
        { title: "Final Review", icon: <FaPlayCircle /> },
        { title: "Exam Preparation", icon: <FaBook /> },
        { title: "Submission Guidelines", icon: <FaTasks /> },
        { title: "Final Project Files", icon: <FaFileCode /> },
      ],
    },
  ];

  return (
    <div className={`course-topics ${isFullScreenForLargeS ? 'row-start-2 row-end-5' : 'row-start-1 row-end-5'}`}>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Topics</h1>
      {/* Progress bar container with ref */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-6" ref={progressBarRef}>
        <div
          className="bg-green-500 h-1 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
        {/* Display progress percentage */}
        <div className="text-sm text-gray-700 mt-1 text-center flex items-center justify-center">{progress}%</div>
      </div>
      <div className="flex flex-wrap gap-4">
        {topics.map((topic, topicIndex) => (
          <div key={topicIndex} className="bg-white border border-stone-500 w-full p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-1">{topic.week}</h2>
              {/* Toggle button visible only on small screens */}
              <div
                className="md:hidden text-stone-800 cursor-pointer border border-transparent duration-500 rounded-full w-[30px] h-[30px] flex items-center justify-center"
                onClick={() => handleCardToggle(topicIndex)}
              >
                {openCards[topicIndex] ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            {/* Week description under the week title */}
            <p className="text-gray-600 mb-3">{topic.description}</p>
            {/* Details: show only if open on small screens, always show on md+ */}
            <ul className={`${openCards[topicIndex] ? "block" : "hidden"} md:block space-y-2`}>
              {topic.details.map((detail, i) => {
                const isClickable = topicIndex === 0 && detail.name;
                return (
                  <li
                    key={i}
                    className={`flex justify-between items-center gap-2 py-3 border-b border-stone-500 last:border-none text-stone-600 ${isClickable ? "cursor-pointer hover:text-blue-600" : ""}`}
                    onClick={isClickable ? () => handleClick(detail.name.trim()) : undefined}
                    data-custom={isClickable ? detail.name.trim() : undefined}
                  >
                    <span className="flex items-center gap-1">
                      {detail.icon}
                      {detail.title}
                    </span>
                    <span>
                      <GiPadlock />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTopics;
