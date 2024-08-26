import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    MagicEdtech,
    PGTech,
    BrainTechnosys,
    carrent,
    YouTube,
    threejs,
    Ecommerce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company_name: "PG Tech Pvt Limited",
      icon: PGTech,
      iconBg: "#383E56",
      date: "February 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer Trainee",
      company_name: "Brain Technosys Pvt Limited",
      icon: BrainTechnosys,
      iconBg: "#E6DEDD",
      date: "November 2023 - February 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Magic Edtech",
      icon: MagicEdtech,
      iconBg: "#383E56",
      date: "March 2024 - July 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Mark Zuckerburg",
      designation: "Founder",
      company: "Facebook",
      image: "data:image/jpeg;base64,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",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Google",
      designation: "CEO",
      company: "Sundar Pichai",
      image: "data:image/jpeg;base64,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",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Microsoft",
      designation: "Founder",
      company: "Bill Gates",
      image: "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/razzput007/Car-Rental",
    },
    {
      name: "YouTube",
      description:
        "A YouTube project replicates the core features of YouTube, including video playback, user profiles, and content discovery, to create a similar video-sharing platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
      ],
      image: YouTube,
      source_code_link: "https://github.com/razzput007/Youtube-Clone",
    },
    {
      name: "FlipZone",
      description:
        "A feature-rich eCommerce platform designed for seamless online shopping with intuitive navigation, secure transactions, and personalized user experiences.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "Node Js",
          color: "pink-text-gradient",
        },
      ],
      image: Ecommerce,
      source_code_link: "https://github.com/razzput007/FlipZone-Frontend",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };