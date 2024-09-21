import React from 'react';
import { about_details } from '../constants';

const Skill = () => {
  return (
    <div className="relative w-full flex flex-col gap-10 cursor-pointer lg:flex-row">
      {about_details.map((detail, detailIndex) => (
        <section
          key={detailIndex}
          className="w-full  lg:w-1/3 transition-transform transform hover:shadow-teal-glow-sm hover:scale-105 overflow-hidden rounded-lg"
        >
          {/* Section Title */}
          <div className="w-full bg-gradient-to-br from-[#17494d] to-teal p-2 text-center text-white border-b-2 border-teal-300 rounded-t-lg">
            <span className="inline-block p-2 text-xl font-medium">{detail.title}</span>
          </div>

          {/* Skill List */}
          <div className="bg-[#001E1E] h-full text-white w-full p-4 rounded-b-lg ">
            <ul className="space-y-0">
              {detail.names && detail.names.length > 0 ? (
                detail.names.map((name, nameIndex) => (
                  <li
                    key={nameIndex}
                    className="flex items-center justify-between py-2"
                  >
                    {/* Skill Icon and Name */}
                    <div className="flex items-center">
                      <img
                        className="w-6 h-6 mr-2"
                        src={detail.image ? detail.image[nameIndex] : ""}
                        alt={name}
                      />
                      <span className="w-24">{name}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 mx-4 h-2 bg-white rounded-sm overflow-hidden">
                      <div
                        className="h-full bg-teal-500"
                        style={{ width: `${detail.percentage[nameIndex]}%` }}
                      ></div>
                    </div>

                    {/* Skill Percentage */}
                    <span className="text-sm font-medium">{detail.percentage[nameIndex]}%</span>
                  </li>
                ))
              ) : (
                <li className="text-red-500">No skills available</li>
              )}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skill;
