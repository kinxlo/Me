import gsap from "./gsap";

export const initProjectAnimationList = (projects: Project[]) => {
  for (const [index] of projects.entries()) {
    const project = `.project-${index}`;

    gsap.from(`${project} .project-title`, {
      duration: 2,
      ease: "power3.out",
      text: "",
      scrollTrigger: {
        trigger: project,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(`${project} .project-p`, {
      delay: 2,
      duration: 2,
      ease: "power3.out",
      text: "",
      scrollTrigger: {
        trigger: project,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }

  for (const [index] of projects.entries()) {
    const imageContainer = document.querySelector(`.project-${index} .image-marquee-container`);

    if (imageContainer) {
      // Simple scale animation with will-change for performance
      gsap.fromTo(
        imageContainer,
        {
          scale: 0.9,
          opacity: 0.9,
          willChange: "transform, opacity", // Hint to browser for optimization
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: `.project-${index}`,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
        },
      );
    }
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

export const projectTextTimeline = gsap.timeline();
export const projectTextAnimation = () => {
  projectTextTimeline
    .to(`.txt-1`, {
      text: {
        value: "Showcase",
        newClass: "text-primary",
        speed: 1.5,
      },
      ease: "none",
    })
    .to(`.txt-2`, {
      text: {
        value:
          "Here you will find some of the personal and clients projects that I created with each project containing its own case study",
        newClass: "text-black",
        speed: 1,
      },
      ease: "none",
    });

  return projectTextTimeline;
};
