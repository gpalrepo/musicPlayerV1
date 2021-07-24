import React from "react";

export default function Author({ name, openModal }) {
  return (
    <div className="w-full mb-5">
      <div className="text-gray-500 font-medium text-xl whitespace-nowrap mb-2">
        {name}
        <button className="inline ml-1" onClick={openModal}>
          <svg
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 inline-flex"
          >
            <path
              d="M6.49998 1.08325C3.50998 1.08325 1.08331 3.50992 1.08331 6.49992C1.08331 9.48992 3.50998 11.9166 6.49998 11.9166C9.48998 11.9166 11.9166 9.48992 11.9166 6.49992C11.9166 3.50992 9.48998 1.08325 6.49998 1.08325ZM7.04165 9.20825H5.95831V5.95825H7.04165V9.20825ZM7.04165 4.87492H5.95831V3.79159H7.04165V4.87492Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
