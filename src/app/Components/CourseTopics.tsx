'use client';
import React, { useEffect, useState, useRef, JSX } from "react";
import { FaBook, FaFileCode, FaTasks, FaPlayCircle, FaPlus, FaMinus } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import useStore from "../context/useStore";
import { useVideo } from "../context/VideoContext";
import { topics } from "../Data/FakeData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// * Convert Normal String to JSX Element ( For Icons )
const iconMap: Record<string, JSX.Element> = {
  FaPlayCircle: <FaPlayCircle />,
  FaBook: <FaBook />,
  FaTasks: <FaTasks />,
  FaFileCode: <FaFileCode />,
};

const CourseTopics: React.FC = () => {
  // * ################################# Start Hooks
  const [progress, setProgress] = useState(0);
  const fakeProgress = 93; 
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBarInnerRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useStore();
  const { isFullScreenForLargeS } = useVideo();
  const [openCards, setOpenCards] = useState<Record<number, boolean>>({});
  const detailsRefs = useRef<(HTMLUListElement | null)[]>([]);
  // * ################################# End Hooks

  // * ################################# Start Helper Functions
  // & Helper to convert hex color to RGB
  const hexToRgb = (hex: string) => {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const bigint = parseInt(hex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  // Function to compute interpolated color based on current progress
  const getInterpolatedColor = (progressValue: number) => {
    const stops = [
      { progress: 0, color: "#F43F5E" },    
      { progress: 20, color: "#F97316" },   
      { progress: 80, color: "#8B5CF6" },   
      { progress: 100, color: "#8B5CF6" },  
      { progress: 40, color: "#14B8A6" },   
      { progress: 60, color: "#0EA5E9" },   
    ];

    if (progressValue <= stops[0].progress) return stops[0].color;
    if (progressValue >= stops[stops.length - 1].progress) return stops[stops.length - 1].color;

    let startStop = stops[0];
    let endStop = stops[stops.length - 1];

    for (let i = 0; i < stops.length - 1; i++) {
      if (progressValue >= stops[i].progress && progressValue <= stops[i + 1].progress) {
        startStop = stops[i];
        endStop = stops[i + 1];
        break;
      }
    }

    const range = endStop.progress - startStop.progress;
    const factor = (progressValue - startStop.progress) / range;

    const startRGB = hexToRgb(startStop.color);
    const endRGB = hexToRgb(endStop.color);

    const r = Math.round(startRGB.r + factor * (endRGB.r - startRGB.r));
    const g = Math.round(startRGB.g + factor * (endRGB.g - startRGB.g));
    const b = Math.round(startRGB.b + factor * (endRGB.b - startRGB.b));

    return `rgb(${r}, ${g}, ${b})`;
  };
  // * ################################# End Helper Functions

  // * ################################# Start Animation Logic using GSAP ScrollTrigger
  useEffect(() => {
    if (!progressBarRef.current || !progressBarInnerRef.current) return;

    if (window.innerWidth >= 768) {
      // For md+ screens, animate progress bar immediately (do not wait for scroll trigger)
      const tl = gsap.timeline();
      tl.to(progressBarInnerRef.current, {
        width: `${fakeProgress}%`,
        duration: 3,
        ease: "power1.out"
      });
      tl.to({ val: 0 }, {
        val: fakeProgress,
        duration: 3,
        ease: "power1.out",
        onUpdate: function() {
          const currentVal = Math.round(this.targets()[0].val);
          setProgress(currentVal);
          if (progressBarInnerRef.current) {
            progressBarInnerRef.current.style.backgroundColor = getInterpolatedColor(currentVal);
          }
        }
      }, 0);
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: progressBarRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate the width of the inner progress bar from 0 to fakeProgress%
      tl.to(progressBarInnerRef.current, {
        width: `${fakeProgress}%`,
        duration: 3,
        ease: "power1.out"
      });

      // Animate a dummy value to update the progress state and background color
      tl.to({ val: 0 }, {
        val: fakeProgress,
        duration: 3,
        ease: "power1.out",
        onUpdate: function() {
          const currentVal = Math.round(this.targets()[0].val);
          setProgress(currentVal);
          if (progressBarInnerRef.current) {
            progressBarInnerRef.current.style.backgroundColor = getInterpolatedColor(currentVal);
          }
        }
      }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  // * ################################# End Animation Logic

  // * ################################# Start Handlers
  // & Toggle the open state of a specific card with smooth GSAP animation
  const handleCardToggle = (index: number) => {
    // For md screens, cards are always open
    if (window.innerWidth >= 768) return;
    const isOpen = openCards[index];
    setOpenCards((prev) => ({ ...prev, [index]: !prev[index] }));
    const detailsEl = detailsRefs.current[index];
    if (!detailsEl) return;
    if (!isOpen) {
      // Expand: animate height from 0 to auto and fade in
      gsap.to(detailsEl, { height: "auto", opacity: 1, duration: 0.5, ease: "power1.out" });
    } else {
      // Collapse: animate height to 0 and fade out
      gsap.to(detailsEl, { height: 0, opacity: 0, duration: 0.5, ease: "power1.out" });
    }
  };

  // & Open PopUp plugines
  const handleClick = (whichOppend: string) => {
    dispatch({
      type: "SET_OPPEND",
      payload: {
        isOppend: true,
        whichOppend: whichOppend,
      },
    });
  };
  // * ################################# End Handlers

  // * ################################# Start JSX Elementes
  return (
    <div className={`course-topics ${isFullScreenForLargeS ? 'row-start-2 row-end-5' : 'row-start-1 row-end-5'}`}>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Topics</h1>
      {/* Advanced GSAP Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-2" ref={progressBarRef}>
        <div
          ref={progressBarInnerRef}
          className="h-1 rounded-full"
          style={{ width: "0%" }} 
        ></div>
      </div>
      <div className="text-sm text-gray-700 mb-6 text-center flex items-center justify-center">
        {progress}%
      </div>
      {/* Course Topics */}
      <div className="flex flex-wrap gap-4">
        {topics.map((topic, topicIndex) => (
          <div key={topicIndex} className="bg-white border border-stone-500 w-full p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-1">{topic.week}</h2>
              <div
                className="md:hidden text-stone-800 cursor-pointer border border-transparent duration-500 rounded-full w-[30px] h-[30px] flex items-center justify-center transition-all ease-in-out"
                onClick={() => handleCardToggle(topicIndex)}
              >
                {openCards[topicIndex] ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            <p className="text-gray-600 mb-3">{topic.description}</p>
            {/* Details: always rendered but animated on mobile */}
            <ul
              ref={(el) => {
                detailsRefs.current[topicIndex] = el;
                if (el) {
                  if (window.innerWidth >= 768) {
                    gsap.set(el, { height: "auto", opacity: 1 });
                  } else if (!openCards[topicIndex]) {
                    gsap.set(el, { height: 0, opacity: 0 });
                  }
                }
              }}
              className="space-y-2 md:block"
              style={{ overflow: "hidden" }}
            >
              {topic.details.map((detail, i) => {
                const isClickable = topicIndex === 0 && detail.name;
                return (
                  <li
                    key={i}
                    className={`flex justify-between items-center gap-2 py-3 border-b border-stone-500 last:border-none text-stone-600 ${isClickable ? "cursor-pointer hover:text-blue-600" : ""}`}
                    onClick={isClickable ? () => handleClick(detail.name.trim()) : undefined}
                    data-custom={isClickable ? detail.name.trim() : undefined}
                  >
                    <span className="flex items-center gap-2">
                      <span className='text-teal-600'>{iconMap[detail.icon]} </span>
                      {detail.title}
                    </span>
                    <span>
                      <GiPadlock />
                    </span>
                  </li>
                );
              })}
            </ul>
            {/* Details */}
          </div>
        ))}
      </div>
      {/* Course Topics */}
    </div>
  );
  // * ################################# End JSX Elementes
};

export default CourseTopics;
