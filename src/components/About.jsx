import React from "react";
import { SectionWrapper } from "./hoc";
import TabComponent from "./tabComponent";
import { styles } from "../style";

const About = () => {
  return (
    <>
      <section id="about" className="w-full">
        <h1 className={`${styles.sectionHeadText} mb-6`}>About Me</h1>
        <div className="flex flex-col items-center flex-wrap justify-between lg:flex-nowrap lg:items-start">
          {/* Image Section */}
          <div className="basis-full md:basis-[35%] mb-6 md:mb-0 lg:flex lg:items-center lg:text-xl lg:mb-20">
            <img
              className="w-full h-auto rounded-2xl object-cover lg:w-1/3 transition-transform transform hover:scale-95"
              src="../src/assets/jahir81.jpg"
              alt="user"
            />
            <p className="my-6 py-6 border-b-[1px] border-teal-900 text-wrap text-center text-slate-200 lg:p-8 lg:border-none cursor-pointer transition-transform transform hover:scale-95">
              "Enthusiastic and motivated recent graduate with a passion for
              Full Stack Development. Skilled in various programming languages,
              frameworks, and methodologies through hands-on projects. Eager to
              contribute problem-solving skills and a collaborative mindset to a
              challenging Full Stack Developer role.""
            </p>
          </div>

          {/* Text Section */}
          <div className="w-full md:basis-3/5 ">
            <TabComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(About, "");
