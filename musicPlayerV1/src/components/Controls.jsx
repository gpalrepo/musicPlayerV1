import React from "react";

export default function Controls({
  isPlaying,
  togglePlay,
  openModal,
  forward,
  backward,
  handlePlaybackSpeed,
  rate,
}) {
  return (
    <div className="flex items-start mb-4">
      <button
        onClick={togglePlay}
        className="bg-gray-700 flex items-center justify-center flex-none w-20 h-20 sm:w-28 sm:h-28 rounded-full focus:outline-none"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 transform translate-x-0.5 pointer-events-none"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 sm:w-12 sm:h-12 transform translate-x-0.5 pointer-events-none"
          >
            <polygon stroke="white" points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
      <div className="flex flex-col flex-grow mx-3 sm:items-center">
        <button
          onClick={openModal}
          className="text-xs sm:text-lg w-full sm:w-4/5 py-2 bg-gray-700 text-white rounded-md flex items-center justify-center"
        >
          View Chapters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="block h-3 w-3 sm:h-5 sm:w-5 align-middle ml-1 sm:ml-2"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </button>
        <div className="flex items-center mt-2 sm:mt-3 justify-evenly w-full text-gray-700">
          <button onClick={backward}>
            <svg
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-14 sm:h-14"
            >
              <path
                d="M25.8334 16.7915C25.8334 22.4748 21.1834 27.1248 15.5 27.1248C10.253 27.1248 5.88675 23.1614 5.24729 18.0805C5.15821 17.3727 5.74501 16.7915 6.45838 16.7915C7.17175 16.7915 7.73876 17.3742 7.85751 18.0776C8.47473 21.7337 11.6754 24.5415 15.5 24.5415C19.7625 24.5415 23.25 21.054 23.25 16.7915C23.25 12.529 19.7625 9.0415 15.5 9.0415V11.794C15.5 12.6849 14.4229 13.131 13.7929 12.5011L9.04171 7.74984L13.7929 2.99861C14.4229 2.36865 15.5 2.81481 15.5 3.70572V6.45817C21.1834 6.45817 25.8334 11.1082 25.8334 16.7915Z"
                fill="currentColor"
              />
              <path
                d="M13.518 20V19.342H14.512V16.416H13.693V15.912C13.917 15.87 14.1083 15.821 14.267 15.765C14.4303 15.7043 14.582 15.632 14.722 15.548H15.324V19.342H16.199V20H13.518ZM18.3809 20.084C17.9142 20.084 17.5455 19.8857 17.2749 19.489C17.0042 19.0877 16.8689 18.509 16.8689 17.753C16.8689 16.997 17.0042 16.4277 17.2749 16.045C17.5455 15.6577 17.9142 15.464 18.3809 15.464C18.8475 15.464 19.2162 15.6577 19.4869 16.045C19.7575 16.4323 19.8929 17.0017 19.8929 17.753C19.8929 18.509 19.7575 19.0877 19.4869 19.489C19.2162 19.8857 18.8475 20.084 18.3809 20.084ZM18.3809 19.454C18.4882 19.454 18.5862 19.426 18.6749 19.37C18.7682 19.3093 18.8475 19.2113 18.9129 19.076C18.9782 18.9407 19.0295 18.7657 19.0669 18.551C19.1042 18.3363 19.1229 18.0703 19.1229 17.753C19.1229 17.4403 19.1042 17.179 19.0669 16.969C19.0295 16.7543 18.9782 16.5817 18.9129 16.451C18.8475 16.3203 18.7682 16.2293 18.6749 16.178C18.5862 16.122 18.4882 16.094 18.3809 16.094C18.2735 16.094 18.1732 16.122 18.0799 16.178C17.9912 16.2293 17.9142 16.3203 17.8489 16.451C17.7835 16.5817 17.7322 16.7543 17.6949 16.969C17.6575 17.179 17.6389 17.4403 17.6389 17.753C17.6389 18.0703 17.6575 18.3363 17.6949 18.551C17.7322 18.7657 17.7835 18.9407 17.8489 19.076C17.9142 19.2113 17.9912 19.3093 18.0799 19.37C18.1732 19.426 18.2735 19.454 18.3809 19.454Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button
            onClick={handlePlaybackSpeed}
            className="border-2 border-gray-700 focus:outline-none font-semibold text-xs rounded-md px-2 flex items-center justify-center py-1 sm:text-base sm:px-3"
          >
            {rate}x
          </button>

          <button onClick={forward}>
            <svg
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-14 sm:h-14"
            >
              <path
                d="M5.16663 16.7915C5.16663 22.4748 9.81662 27.1248 15.5 27.1248C20.747 27.1248 25.1133 23.1614 25.7527 18.0805C25.8418 17.3727 25.255 16.7915 24.5416 16.7915C23.8283 16.7915 23.2612 17.3742 23.1425 18.0776C22.5253 21.7337 19.3246 24.5415 15.5 24.5415C11.2375 24.5415 7.74996 21.054 7.74996 16.7915C7.74996 12.529 11.2375 9.0415 15.5 9.0415V11.794C15.5 12.6849 16.5771 13.131 17.2071 12.5011L21.9583 7.74984L17.2071 2.99861C16.5771 2.36865 15.5 2.81481 15.5 3.70572V6.45817C9.81662 6.45817 5.16663 11.1082 5.16663 16.7915Z"
                fill="currentColor"
              />
              <path
                d="M12.518 20V19.342H13.512V16.416H12.693V15.912C12.917 15.87 13.1083 15.821 13.267 15.765C13.4303 15.7043 13.582 15.632 13.722 15.548H14.324V19.342H15.199V20H12.518ZM17.3809 20.084C16.9142 20.084 16.5455 19.8857 16.2749 19.489C16.0042 19.0877 15.8689 18.509 15.8689 17.753C15.8689 16.997 16.0042 16.4277 16.2749 16.045C16.5455 15.6577 16.9142 15.464 17.3809 15.464C17.8475 15.464 18.2162 15.6577 18.4869 16.045C18.7575 16.4323 18.8929 17.0017 18.8929 17.753C18.8929 18.509 18.7575 19.0877 18.4869 19.489C18.2162 19.8857 17.8475 20.084 17.3809 20.084ZM17.3809 19.454C17.4882 19.454 17.5862 19.426 17.6749 19.37C17.7682 19.3093 17.8475 19.2113 17.9129 19.076C17.9782 18.9407 18.0295 18.7657 18.0669 18.551C18.1042 18.3363 18.1229 18.0703 18.1229 17.753C18.1229 17.4403 18.1042 17.179 18.0669 16.969C18.0295 16.7543 17.9782 16.5817 17.9129 16.451C17.8475 16.3203 17.7682 16.2293 17.6749 16.178C17.5862 16.122 17.4882 16.094 17.3809 16.094C17.2735 16.094 17.1732 16.122 17.0799 16.178C16.9912 16.2293 16.9142 16.3203 16.8489 16.451C16.7835 16.5817 16.7322 16.7543 16.6949 16.969C16.6575 17.179 16.6389 17.4403 16.6389 17.753C16.6389 18.0703 16.6575 18.3363 16.6949 18.551C16.7322 18.7657 16.7835 18.9407 16.8489 19.076C16.9142 19.2113 16.9912 19.3093 17.0799 19.37C17.1732 19.426 17.2735 19.454 17.3809 19.454Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-md shadow-md overflow-hidden flex-none">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1610976503678-e3692dadefa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
