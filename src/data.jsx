import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import img1 from "../src/assets/assetcomconsole.png";
import img2 from "../src/assets/echolens.png";
import img3 from "../src/assets/trackwellness.png";
import img4 from "../src/assets/urls.png";
import img5 from "../src/assets/labels.png";
import img6 from "../src/assets/clock.png";
import eduquant from "../src/assets/eduquant.png";
import eyeage from "../src/assets/eyeage.png";

export const links = [
  { id: nanoid(), href: "/", text: "Home" },
  { id: nanoid(), href: "/skills", text: "skills" },
  { id: nanoid(), href: "/about", text: "about" },
  { id: nanoid(), href: "/resume", text: "resume" },
  { id: nanoid(), href: "/projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-green-500" />,
    text: "Skilled in Node.js for building fast, scalable, and efficient backend applications, leveraging asynchronous programming and RESTful API development.",
  },

  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in Python programming, building scalable applications, data analysis, automation, and AI-driven solutions with robust backend development.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: img1,
    url: "https://flipkart.algoapp.in/",
    github: "https://flipkart.algoapp.in/",
    title: "Asset complaince Console",
    text: "A comprehensive tool for verifying, tracking, and reconciling laptop serial numbers to ensure asset compliance and accuracy.",
  },
  {
    id: nanoid(),
    img: eduquant,
    url: "https://eduquant.algoapp.in/",
    github: "https://eduquant.algoapp.in/",
    title: "Eduquant Institute",
    text: "Eduquant Institute Web App",
  },
  {
    id: nanoid(),
    img: img2,
    url: "https://echolens.algoapp.in/",
    github: "https://echolens.algoapp.in/",
    title: "Echolens",
    text: "AI powered speech and text analytics tool.",
  },
  {
    id: nanoid(),
    img: eyeage,
    url: "https://eyeage.algoapp.in/",
    github: "https://eyeage.algoapp.in/",
    title: "Eye Mointor app",
    text: "Eye Mointor app, and has eyesight data sharing feature",
  },
  {
    id: nanoid(),
    img: img3,
    url: "https://trackwellness.in/",
    github: "https://trackwellness.in/",
    title: "Wellness Tracker",
    text: "Multi User scalable Wellness Tracker with Sign in with Google. Log your weight and view trends over time with beautiful graphs.",
  },
  {
    id: nanoid(),
    img: img4,
    url: "https://algoapp.in/urls",
    github: "https://algoapp.in/urls",
    title: "Book Marker",
    text: "Url Keeper app to keep, update and show Urls from all the users",
  },
  {
    id: nanoid(),
    img: img5,
    url: "https://algoapp.in/labels",
    github: "https://algoapp.in/labels",
    title: "Label Maker 8x3 Lable sheet",
    text: "Print Labels of 8x3 size on A4 sheet",
  },
  {
    id: nanoid(),
    img: img6,
    url: "https://algoapp.in/clock",
    github: "https://algoapp.in/clock",
    title: "Full Size Clock",
    text: "Clock Size grows as horizontal screen size grows",
  },
];
