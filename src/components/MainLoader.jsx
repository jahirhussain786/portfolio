import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const MainLoader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <InfinitySpin
        height="100"
        width="100"
        radius="9"
        color="teal"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default MainLoader;
