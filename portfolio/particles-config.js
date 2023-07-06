const particlesConfig = {
    background: {
        color: {
            value: " rgba(0, 0, 100%, 80%)",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "top-right",
            enable: true,
            // outModes: {
            //     default: "bounce",
            // },
            random: false,
            speed: 2,
            straight: true,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}
  export default particlesConfig


//   const particlesInit = useCallback(async (engine: Engine) => {
//     console.log(engine);

  
//     await loadFull(engine);
// }, []);

// const particlesLoaded = useCallback(async (container: Container | undefined) => {
//     await console.log(container);
// }, []);

// return (
//     <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={particlesConfig}
//     />
// );
// }