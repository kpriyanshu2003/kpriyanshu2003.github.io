"use client";

import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Function to update the loading bar progress
    const updateProgress = () => {
      // Here, you can set the value for the progress state based on your loading progress.
      // For simplicity, let's just use a random value between 0 and 100.
      const randomProgress = Math.floor(Math.random() * 100) + 1;
      setProgress(randomProgress);
    };

    // Your API calls or page transitions should trigger this function to update the progress bar.
    // For example, you can call updateProgress() in response to API requests or page changes.

    // For demonstration purposes, we'll simulate progress update using a timer.
    const timer = setInterval(updateProgress, 500);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <LoadingBar
      color="#38bdf8" // You can change the color of the loading bar here
      progress={progress}
      height={4}
    />
  );
};

export default ProgressBar;
