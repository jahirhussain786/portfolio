import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import React, {lazy} from 'react';

// Dynamically import components using React.lazy
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const Hero = React.lazy(() => import('./components/Hero'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Works = React.lazy(() => import('./components/Works'));
const StarsCanvas = React.lazy(() => import('./components/Stars'));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* Wrap lazy-loaded components in Suspense */}
          <Suspense fallback={<div>Loading Navbar...</div>}>
            <Navbar />
          </Suspense>
          <Suspense fallback={<div>Loading Hero...</div>}>
            <Hero />
          </Suspense>
        </div>
        
        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>

        <Suspense fallback={<div>Loading Works...</div>}>
          <Works />
        </Suspense>
        
        <div className='relative z-0'>
          <Suspense fallback={<div>Loading Contact...</div>}>
            <Contact />
          </Suspense>

          <Suspense fallback={<div>Loading StarsCanvas...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
