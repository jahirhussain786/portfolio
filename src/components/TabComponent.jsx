import React, { useState, useRef, useEffect } from "react";
import { about } from "../constants";
import Skill from "./Skill";
import Education from "./Education";
import Credentials from "./Credentials";

const TabComponent = () => {
  // Initialize the selected tab to 0 (Skill section) by default
  const [selectedTab, setSelectedTab] = useState(0);
  const [active, setActive] = useState("");
  const firstBtnRef = useRef(null);

  // Set the active tab on mount
  useEffect(() => {
    if (about.length > 0) {
      setActive(about[0].title);
    }
  }, []);

  return (
    <div>
      {/* Title divs */}
      <ul className="list-none sm:flex flex-row gap-10 lg:border-y-2 lg:py-4 lg:border-teal-600 lg:border-opacity-30">
        {about.map((item, index) => (
          <button
            className={`relative group hover:bg-gradient-to-t from-[#1b5f64] to-transparent p-2 px-4 text-white-100 ${
              active === item.title
                ? "bg-gradient-to-t from-[#1b5f64] to-transparent p-2 px-4 text-teal-100 scale-105 cursor-pointer "
                : ""
            }`}
            key={index}
            ref={index === 0 ? firstBtnRef : null}
            onClick={() => {
              setSelectedTab(index);
              setActive(item.title);
            }}
          >
            {item.title}
            <span
              className={`absolute left-0 bottom-[0px] h-[3px] bg-teal-300 transition-all duration-500 ${
                active === item.title ? "w-full" : "w-0"
              } group-hover:w-full`}
            ></span>
          </button>
        ))}
      </ul>

      {/* Content divs */}
      <div className="mt-10 ">
        {about.map((item, index) => (
          <div
            key={index}
            className={`${selectedTab === index ? "" : "hidden"}`}
          >
            {index === 0 && <Skill />}
            {index === 1 && <Education />}
            {index === 2 && <Credentials />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
