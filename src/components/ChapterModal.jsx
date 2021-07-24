import React from "react";
import { motion } from "framer-motion";

export default function ChapterModel({
  closeModal,
  handleChapterSeek,
  chapters,
}) {
  const handleChapterClick = (e) => {
    e.stopPropagation();
    let clicked = e.target.dataset.second;
    handleChapterSeek(+clicked);
    closeModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="absolute overflow-y-auto z-50 inset-0 h-full w-full flex justify-center items-start"
    >
      <div className="rounded-xl w-full min-h-full bg-white shadow-md p-6">
        <div className="w-full flex">
          <div className="h-12 w-12 bg-gray-700 flex items-center justify-center rounded-full flex-grow-0 overflow-hidden">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="block"
            >
              <path
                d="M3.83333 18.6873C3.83333 18.0519 4.08575 17.4425 4.53505 16.9932C4.98436 16.5439 5.59375 16.2915 6.22916 16.2915H19.1667"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.22916 1.9165H19.1667V21.0832H6.22916C5.59375 21.0832 4.98436 20.8308 4.53505 20.3815C4.08575 19.9321 3.83333 19.3228 3.83333 18.6873V4.31234C3.83333 3.67692 4.08575 3.06753 4.53505 2.61823C4.98436 2.16892 5.59375 1.9165 6.22916 1.9165V1.9165Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col ml-4 justify-start flex-grow">
            <h1 className="text-lg font-semibold m-0 p-0">Chapters</h1>
            <h1 className="text-sm text-gray-500 font-semibold">Tap to Seek</h1>
          </div>
          <button
            className="flex-grow-0 focus:outline-none"
            onClick={closeModal}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 29.3334C23.3638 29.3334 29.3333 23.3639 29.3333 16.0001C29.3333 8.63628 23.3638 2.66675 16 2.66675C8.6362 2.66675 2.66667 8.63628 2.66667 16.0001C2.66667 23.3639 8.6362 29.3334 16 29.3334Z"
                stroke="#1B1B1B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 12L12 20"
                stroke="#1B1B1B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12L20 20"
                stroke="#1B1B1B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="w-full mt-6 mb-4">
          {chapters.map((el, index) => (
            <button
              key={index}
              className="w-full py-2 border-b-2 flex"
              data-second={el.time}
              onClick={handleChapterClick}
            >
              <span className="w-1/5 font-semibold text-gray-700 pointer-events-none">
                {TimeString(el.time)}
              </span>
              <span className="w-auto pointer-events-none">{el.caption}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TimeString(sec) {
  var sec_num = parseInt(sec, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (hours === "00") hours = "";
  else hours = hours + ":";

  return hours + minutes + ":" + seconds;
}
