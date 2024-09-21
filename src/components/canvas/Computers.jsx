import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet, isDesktop, isLaptop }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={
          isMobile
            ? 0.6
            : isTablet
            ? 0.7
            : isLaptop
            ? 0.8
            : isDesktop
            ? 0.75
            : 0.75
        }
        position={
          isMobile
            ? [0, -3, -2.2]
            : isTablet
            ? [0, -3.1, -1.8]
            : isLaptop
            ? [1, -3.1, -5] // Adjust position to the right for laptops
            : isDesktop
            ? [0, -3.25, -1.5]
            : [0, -3.25, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
    const tabletMediaQuery = window.matchMedia("(max-width: 800px) and (min-width: 501px)");
    const laptopMediaQuery = window.matchMedia("(max-width: 1440px) and (min-width: 1024px)"); // Laptop range
    const desktopMediaQuery = window.matchMedia("(min-width: 1441px)");

    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);
    setIsLaptop(laptopMediaQuery.matches);
    setIsDesktop(desktopMediaQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletChange = (event) => setIsTablet(event.matches);
    const handleLaptopChange = (event) => setIsLaptop(event.matches);
    const handleDesktopChange = (event) => setIsDesktop(event.matches);

    mobileMediaQuery.addEventListener("change", handleMobileChange);
    tabletMediaQuery.addEventListener("change", handleTabletChange);
    laptopMediaQuery.addEventListener("change", handleLaptopChange);
    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileChange);
      tabletMediaQuery.removeEventListener("change", handleTabletChange);
      laptopMediaQuery.removeEventListener("change", handleLaptopChange);
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={isLaptop}
          maxAzimuthAngle={isLaptop ? -Math.PI / 0.79 : Infinity} 
          minAzimuthAngle={isLaptop ? Math.PI / 6 : Infinity}
          // target={isLaptop ? [0, 0, 0] : ""}
          // enableRotate={isLaptop ? false : true}
        />
        
        <Computers isMobile={isMobile} isTablet={isTablet} isLaptop={isLaptop} isDesktop={isDesktop} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
