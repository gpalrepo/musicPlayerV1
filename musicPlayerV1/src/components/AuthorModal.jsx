import React from "react";
import { motion } from "framer-motion";

export default function AuthorModal({ closeModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="absolute z-50 overflow-y-auto inset-0 h-full w-full flex bg-white items-start justify-center sm:items-start"
    >
      <div className="rounded-xl w-full min-h-full bg-white p-5">
        <div className="w-full flex">
          <div className="h-12 w-12 bg-gray-700 rounded-full flex-grow-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1610976503678-e3692dadefa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col ml-4 justify-start flex-grow">
            <h1 className="text-lg font-semibold m-0 p-0">John Williams</h1>
            <h1 className="text-sm text-gray-500 font-semibold">Social Work</h1>
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
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
          imperdiet vivamus at enim lectus aenean viverra. Mauris varius
          aliquam, turpis consequat magna ante. Justo, scelerisque ac augue
          parturient convallis dolor libero. Etiam vulputate malesuada eget
          sapien mattis venenatis eu maecenas auctor.
        </p>

        <h1 className="mt-5 font-semibold text-gray-900">Follow</h1>
        <div className="flex my-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="#4267B2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <path
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                stroke="url(#paint0_linear)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                stroke="url(#paint1_linear)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 6.5H17.51"
                stroke="url(#paint2_linear)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#405DE6" />
                  <stop offset="1" stopColor="#E1306C" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="12.0433"
                  y1="7.95679"
                  x2="12.0433"
                  y2="15.9568"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#405DE6" />
                  <stop offset="1" stopColor="#E1306C" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="17.505"
                  y1="6.5"
                  x2="17.505"
                  y2="7.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#405DE6" />
                  <stop offset="1" stopColor="#E1306C" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke="#0E76A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 9H2V21H6V9Z"
                stroke="#0E76A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="#0E76A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
