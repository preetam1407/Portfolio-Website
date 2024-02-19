import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      className="w-full h-full absolute tranlate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "bubble" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },

          modes: {
            bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
            push: { quantity: 90 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#e68e2e" },
          type: ["circle", "triangle", "polygon"],
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outMode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          shape: { type: ["circle", "square"],},
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.1,
              sync: false,
            },
          },
          
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
