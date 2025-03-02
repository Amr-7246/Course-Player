"use client";
import React, { createContext, useContext, useState } from "react";

interface VideoContextProps {
  isFullScreenForLargeS: boolean;
  setIsFullScreenForLargeS: (value: boolean) => void;
}

// Create context with default values
const VideoContext = createContext<VideoContextProps | undefined>(undefined);

// Context Provider Component
export const VideoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFullScreenForLargeS, setIsFullScreenForLargeS] = useState(false);

  return (
    <VideoContext.Provider value={{ isFullScreenForLargeS, setIsFullScreenForLargeS }}>
      {children}
    </VideoContext.Provider>
  );
};

// Custom hook to use the context
export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};
