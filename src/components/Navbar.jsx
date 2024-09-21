import React, { useState, useEffect } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

import { menu, close } from "../assets";
import ResumeButton from "./ResumeButton";
import njhLogo from "../assets/njh-logo-1.png";

const Navbar = () => {
  // Set initial active state to "Home"
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Function to handle section observation
  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id); // Set active section based on the section's ID
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Adjust the threshold to trigger intersection based on how much the section is visible
    });

    // Observe each section (assuming the sections have matching IDs with navLinks)
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup observer when the component unmounts
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={njhLogo}
            alt="logo"
            className="w-12 h-12 object-contain mx- mr-8"
          />
          <p className="text-white text-[18px] sm:max-md:hidden md:max-[930px]:hidden font-bold cursor-pointer flex capitalize tracking-wider">
            Jahir Hussain &nbsp;
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-8 sm:max-md:gap-4 justify-center items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative group ${
                active === link.id ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer transition-transform duration-300 ease-in-out transform ${
                active === link.id ? "scale-105" : ""
              }`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`} className="relative flex items-center">
                {link.title}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-teal-300 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            </li>
          ))}
          <li className="flex justify-center items-center ">
            <ResumeButton />
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 px-20 py-10 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`relative group ${
                    active === link.id ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[18px] transition-transform duration-300 ease-in-out transform ${
                    active === link.id ? "scale-105" : ""
                  }`}
                  onClick={() => {
                    setActive(link.id);
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className="relative flex items-center"
                  >
                    {link.title}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-teal-300 transition-all duration-300 ${
                        active === link.id ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </a>
                </li>
              ))}

              <li className="flex justify-center items-center ">
                <ResumeButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
