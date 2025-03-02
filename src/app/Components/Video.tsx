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
  // * ################################# Start Hooks
  const { dispatch } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // * ################################# End Hooks

  // * ################################# Start Logic
  // & Screen size state Handling
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // & Video progress Handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  // & Listen for fullscreen changes to update state
  useEffect(() => {
    const handleFullScreenChange = () => {
      const fsElement = document.fullscreenElement;
      setIsFullScreen(!!fsElement);
      if (!fsElement && isSmallScreen) {
        setIsRotated(true);
      }
    };
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, [isSmallScreen]);

  // & Open popup handlers (if needed)
  const handleClick = (whichOppend: string) => {
    dispatch({
      type: "SET_OPPEND",
      payload: {
        isOppend: true,
        whichOppend,
      },
    });
  };

  // & Handle fullscreen/rotation toggle using containerRef
  const handleExpand = async () => {
    if (containerRef.current) {
      if (!isFullScreen) {
        try {
          await containerRef.current.requestFullscreen();
          if (isSmallScreen) {
            setIsRotated(true);
          }
          setIsFullScreen(true);
        } catch (error) {
          console.error("Error entering full screen:", error);
        }
      } else {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
          if (isSmallScreen) {
            setIsRotated(true);
          } else {
            setIsRotated(false);
          }
          setIsFullScreen(false);
        }
      }
    }
  };

  // & Toggle play/pause button
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
  // * ################################# End Logic

  return (
    <div
      ref={containerRef}
      className={`${
        isPlaying
          ? "sticky bg-whiterounded-lg duration-500 bg-white top-0"
          : "relative"
      } md:mb-10 w-full min-h-[400px] p-5 flex flex-wrap items-center justify-center gap-2 md:col-span-2 row-span-1 row-start-1 row-end-2`}
    >
      {/* Video Section */}
      <div
        className={`group block w-full h-fit md:max-h-[450px] bg-black rounded-md overflow-hidden relative ${
          isRotated ? "transform rotate-90" : ""
        }`}
      >
        {/* Video itself */}
        <video
          playsInline
          controls={false}
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={handleTogglePlay}
        >
          <source
            src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Video itself */}
        {/* Render custom controls */}
        <>
          {/* Pause/Start button */}
          <button
            onClick={handleTogglePlay}
            className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {isPlaying ? (
              <FaPause className="cursor-pointer" />
            ) : (
              <FaPlay className="cursor-pointer" />
            )}
          </button>
          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-red-600 via-red-500 to-pink-600 transition-all duration-300"
            ></div>
          </div>
          {/* Expand Button */}
          <button
            onClick={handleExpand}
            className="md:hidden cursor-pointer absolute bottom-4 right-4 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition"
          >
            <FaExpand />
          </button>
        </>
        {/* Render custom controls */}
      </div>
      {/* Icons section */}
      <div className="flex gap-x-5 w-full justify-start mb-15 md:mb-0 text-stone-800 text-[20px] p-2 rounded-md">
        <span className="video-icons">
          <FaChalkboardTeacher />
        </span>
        <span className="video-icons">
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
        <span className="video-icons">
          <FaCrown />
        </span>
      </div>
      {/* Icons section */}
    </div>
  );
};

export default Video;
