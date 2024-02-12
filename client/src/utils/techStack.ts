import fronted from "../assets/front-end-developer.png";
import backend from "../assets/Backend_tech.webp";
import devTools from "../assets/dev-debgg tools.jpg";
const techStack = [
  {
    id: 1,
    catagory: "Frontend Technologies",
    imgSrc: fronted,
    color: "#24CEC8",
    tech: [
      "TypeScript",
      "React js",
      "Redux Toolkit and Redux-saga",
      "Styled-Components",
      "Bootstrap",
    ],
  },
  {
    id: 2,
    catagory: "Backend Technologies",
    imgSrc: backend,
    color: "#2174C9",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
  },

  {
    id: 3,
    catagory: "Development and Debugging  Tools",
    imgSrc: devTools,
    color: "#C9A220",
    tech: [
      "Vite",
      "React Dev Tools",
      "Redux Dev Tools",
      "Postman",
      "Git and Github",
    ],
  },
];
export default techStack;
