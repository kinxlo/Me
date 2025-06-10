import { gsap } from "gsap";

// export const projectTimeline = gsap.timeline();

// export const initProjectAnimation = () => {
//   projectTimeline
//     .from(".project-header h1", {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".project-header",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     })
//     .from(".project-header p", {
//       opacity: 0,
//       y: 40,
//       duration: 0.8,
//       delay: 0.2,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".project-header",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     });

//   return projectTimeline;
// };

export const initProjectAnimationList = (projects: Project[]) => {
  for (const [index] of projects.entries()) {
    const project = `.project-${index}`;

    gsap.from(`${project} .project-title`, {
      opacity: 0,
      x: -40,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(`${project} .github-button`, {
      opacity: 0,
      x: 40,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(`${project} .project-image-container`, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(`${project} .tech-badge`, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 65%",
        toggleActions: "play none none none",
      },
    });
  }
  for (const [index] of projects.entries()) {
    const imageContainer = `.project-${index} .image-marquee-container`;

    // Create a timeline for each image container
    const tl = gsap.timeline({ repeat: -1 });

    // First image scrolls up then down
    tl.to(`${imageContainer} .marquee-image-1`, {
      y: 200,
      duration: 5,
      ease: "power1.inOut",
    }).to(`${imageContainer} .marquee-image-1`, {
      y: 0,
      duration: 5,
      ease: "power1.inOut",
    });

    // Second image scrolls down then up (delayed start)
    gsap.to(`${imageContainer} .marquee-image-2`, {
      y: -200,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2.5, // Stagger the animation
    });

    // Third image scrolls up then down (different timing)
    gsap.to(`${imageContainer} .marquee-image-3`, {
      y: 300,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }
};

export const showProjectTextTimeline = gsap.timeline();
export const showProjectTextAnimation = () => {
  showProjectTextTimeline.to(`.project-text`, {
    opacity: 1,
    x: 0,
    stagger: 0.2,
  });
  return showProjectTextTimeline;
};
