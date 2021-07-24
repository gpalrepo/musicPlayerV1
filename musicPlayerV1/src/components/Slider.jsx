import React from "react";
import "../slider.css";

export default function Slider({
  sliderProgressRef,
  duration,
  seek,
  handleSeekingChange,
  handleMouseDownSeek,
  handleMouseUpSeek,
}) {
  return (
    <div className="flex items-center justify-center relative mt-5 mb-3 py-3">
      <input
        type="range"
        min="0"
        max={duration ? duration.toFixed(2) : 0}
        step=".01"
        value={seek}
        onChange={handleSeekingChange}
        onMouseDown={handleMouseDownSeek}
        onMouseUp={handleMouseUpSeek}
        onTouchStart={handleMouseDownSeek}
        onTouchEnd={handleMouseUpSeek}
        className="w-full slider z-50 absolute"
      />
      <span
        ref={sliderProgressRef}
        className="h-2 bg-gray-500 absolute left-0 rounded-l-full z-40"
      ></span>
      <span className="w-full h-2 bg-gray-200 absolute left-0 rounded-full"></span>
    </div>
  );
}
