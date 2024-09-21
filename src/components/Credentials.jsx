import { credentials } from "../constants";

const Credentials = () => {
  return (
    <div>
      <div className="relative w-full flex flex-col gap-10 lg:flex-row">
        {credentials.map((credit, creditIndex) => (
          <section
            key={creditIndex}
            className="mr-4 w-full transition-transform transform hover:shadow-teal-glow-sm hover:scale-105 overflow-hidden rounded-lg"
          >
            {/* Title Section */}
            <div className="w-full bg-gradient-to-br from-[#17494d] to-teal p-2 text-center text-white border-b-2 border-teal-300 rounded-t-sm">
              <span className="inline-block p-2 text-lg font-medium">
                {credit.title}
              </span>
            </div>

            {/* Course Section */}
            <div className="bg-[#001E1E] text-white w-full rounded-b-sm p-6 pt-2">
              <h3 className="text-lg text-center pt-4 pb-2 font-medium underline underline-offset-[8px] decoration-2 decoration-teal-500">
                {credit.course}
              </h3>
              <div className="flex justify-center items-center">
                <div className="w-10 h-10 animate-bounce-arrow mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              </div>
              {/* Details Section */}
              <ul className="list-none ml-6 mt-2 text-center">
                {credit.details && credit.details.length > 0 ? (
                  credit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-white-100 pb-4 ">
                      {detail}
                    </li>
                  ))
                ) : (
                  <li className="text-red-500">No details available</li>
                )}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Credentials;
