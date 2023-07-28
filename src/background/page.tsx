"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../../particles-config";
 function BackG() {
    const particlesInit = useCallback(async (engine) => {
    
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(
        async (container: Function | undefined) => {
          await console.log(container);
        },
        []
      );
    
  return (
    <div>
         <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
    </div>
  )
}

export default BackG