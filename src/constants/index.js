import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const about = [
  {
    title: "Skills",
    content: "I am a full stack developer",
  },
  {
    title: "Education",
    content: "I am a frontend developer",
  },
  {
    title: "Credentials",
    content: "I am a backend developer",
  },
];

export const about_details = [
  {
    title: "Frontend",
    image: [html, css, javascript, reactjs, tailwind],
    names: ["HTML", "CSS", "Javascript", "ReactJs", "Tailwind CSS"],
    percentage: [90, 82, 75, 75, 80],
  },
  {
    title: "Backend",
    image: [meta, shopify, nodejs, tesla],
    names: ["Java", "SpringBoot", "Node.js", "Sql"],
    percentage: [80, 60, 65, 85],
  },
  {
    title: "Tools & Version Control",
    image: [starbucks, git, github],
    names: ["Eclipse", "Git", "GitHub"],
    percentage: [85, 90, 85],
  },
];

export const education = [
  {
    title: "BCA",
    graduate: "2021-2024",
    percentage: 84,
    location: "Arignar anna government arts college, Cheyyar",
  },
  {
    title: "HSC",
    graduate: "2019-2021",
    percentage: 87,
    location: "Government boys higher secondary school, Cheyyar",
  },
  {
    title: "SSLC",
    graduate: "2018-2019",
    percentage: 80,
    location: "GHS - Housing board, Cheyyar",
  },
];

export const credentials = [
  {
    title: "Besant technologies",
    course: "Full stack Java",
    details: [
      "Core Java and Advanced Java",
      "Spring Framework",
      "Front-End Development",
      "Database Integration",
    ],
  },
  {
    title: "LinkedIn learning",
    course: "Frontend development",
    details: [
      "Front-End technologies",
      "Back-end technologies",
      "Git & GitHub",
      "Sql",
    ],
  },
  // {
  //   title: "Infosys springboard",
  //   course: "Artificial intelligence",
  //   details: [
  //     "Core Java and Advanced Java, Spring Framework, Front-End Development, Version Control with Git & GitHub, Database Integration",
  //   ],
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
