import React from "react";

const ResumeButton = () => {
  return (
    <div className="flex justify-center ">
      <a
        href="/resume.pdf" // Assuming the resume is in the public folder
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-l from-emerald-500 to-emerald-900 flex gap-2 hover:bg-teal-600 text-teal-100 font-semibold py-1 px-3 rounded-3xl shadow-lg transition duration-300 ease-in-out"
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Resume
      </a>
    </div>
  );
};

export default ResumeButton;
