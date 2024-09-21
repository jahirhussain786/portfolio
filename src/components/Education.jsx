import { education } from "../constants";
const Education = () => {
  return (
    <div>
      <div className="relative w-full flex flex-col gap-8 lg:flex-row">
        {education.map((edu, eduIndex) => (
          <section
            key={eduIndex}
            className="mr-4 w-full transition-transform transform hover:shadow-teal-glow-sm hover:scale-105 overflow-hidden rounded-lg"
          >
            <div className="w-full bg-gradient-to-br from-[#17494d] to-teal p-2 text-center text-white border-b-2 border-teal-300 rounded-t-sm">
              <span className="inline-block p-2 text-xl font-semibold">
                {edu.title}
              </span>
            </div>
            <div className="bg-[#001E1E] h-full text-white w-full rounded-b-sm p-8 pt-10 ">
              <h1 className="text-4xl text-center font-semibold">
                {edu.percentage}%
              </h1>
              <h3 className="text-lg text-center py-8 font-medium">
                {edu.location}
              </h3>
              <h6 className="text-md text-center font-normal">
                {edu.graduate}
              </h6>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Education;
