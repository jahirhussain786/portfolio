import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import React, { lazy } from "react";

// Dynamically import components using React.lazy
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Works = React.lazy(() => import("./components/Works"));
const StarsCanvas = React.lazy(() => import("./components/Stars"));
const MainLoader = React.lazy(() => import("./components/MainLoader"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<MainLoader />}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            {/* Wrap lazy-loaded components in Suspense */}
            <Navbar />
            <Hero />
          </div>

          <About />
          <Works />

          <div className="relative z-0">
            <Contact />

            <StarsCanvas />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
