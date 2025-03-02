"use client";
import React, { useEffect, useRef, useState } from "react";
import { 
  FaChalkboardTeacher, 
  FaEnvelopeOpenText, 
  FaGraduationCap, 
  FaQuestionCircle, 
  FaCrown,
  FaExpand, 
  FaPause,
  FaPlay
} from "react-icons/fa";
import useStore from "../context/useStore";

const Video = () => {
  // * Start Hooks
    const { dispatch } = useStore();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
  // * End Hooks
  // * Start Logic
    // & PopUp Oppen
      const handleClick = (whichOppend: string) => {
        dispatch({
            type: "SET_OPPEND",
            payload: {
              isOppend: true,
              whichOppend,
            },
          });
        };
    // & PopUp Oppen
    // & Video Custome Config
      // & Handel Expend
        const handleExpand = async () => {
          if (videoRef.current) {
            if (!isFullScreen) {
              try {
                await videoRef.current.requestFullscreen();
                if (window.innerWidth < 768) {
                  setIsRotated(true);
                }
                setIsFullScreen(true);
              } catch (error) {
                console.error("Error entering full screen:", error);
              }
            } else {
              if (document.fullscreenElement) {
                await document.exitFullscreen();
                setIsFullScreen(false);
                setIsRotated(false);
              }
            }
          }
        };
      // & Handel Expend
      // & Toggle play/pause state.
        const handleTogglePlay = () => {
          if (!videoRef.current) return;
          if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        };
      // & Toggle play/pause state.
      // & Custome progress Par 
        useEffect(() => {
          const video = videoRef.current;
          if (!video) return;
        
          const handleTimeUpdate = () => {
            if (video.duration) {
              setProgress((video.currentTime / video.duration) * 100);
            }
          };
        
          video.addEventListener("timeupdate", handleTimeUpdate);
          return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
          };
        }, []);
      // & Custome progress Par 
    // & Video Custome Config
  // * End Logic
  return (
    <div className= {` ${ isPlaying ? 'sticky' : 'relative' } md:mb-10  w-full min-h-[400px] p-5 flex flex-wrap items-center justify-center gap-2 md:col-span-2  row-span-1 row-start-1 row-end-2`}>
      {/* Video Section */}
      <div className={` block w-full h-fit md:max-h-[450px] bg-black rounded-md overflow-hidden relative top-0 ${ isRotated ? "transform rotate-90" : "" }`}>
        {/* Video itself */}
          <video ref={videoRef} className="w-full h-full object-cover" muted playsInline onClick={handleTogglePlay}>
            <source
              src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        {/* Video itself */}
        {/*Play/Pause Button */}
          <button onClick={handleTogglePlay} className="absolute inset-0 flex items-center justify-center text-white text-6xl transition-opacity duration-300" >
            {isPlaying ? (
              <FaPause className="opacity-75 cursor-pointer hover:opacity-100" />
            ) : (
              <FaPlay className="opacity-75 cursor-pointer hover:opacity-100" />
            )}
          </button>
        {/*Play/Pause Button */}
        {/* Custom Gradient Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1">
            <div style={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-red-600 via-red-500 to-pink-600 transition-all duration-300" ></div>
          </div>
        {/* Custom Gradient Progress Bar */}
        {/* Expand Button */}
          <button onClick={handleExpand} className=" cursor-pointer absolute bottom-4 right-4 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition">
            <FaExpand />
          </button>
        {/* Expand Button */}
      </div>
      {/* Video Section */}
      {/* Icons  */}
        <div className="flex gap-x-5 w-full justify-start mb-7 md:mb-0  text-stone-800 text-[20px] p-2 rounded-md">
          <span className="video-icons">
            <FaChalkboardTeacher />
          </span>
          <span className="video-icons" >
            <FaEnvelopeOpenText />
          </span>
          <span className="video-icons">
            <FaGraduationCap />
          </span>
          <span
            className="video-icons"
            onClick={() => handleClick("AskQ")}
            data-custom="AskQ"
          >
            <FaQuestionCircle />
          </span>
          <span
            className="video-icons"

          >
            <FaCrown />
          </span>
        </div>
      {/* Icons  */}
    </div>
  );
};

export default Video;
