import {
  ReactV,
  chatgpt,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  streamVerse,
  figma,
  threejs,
  Bootstrap,
  reactNative,
  nativebase,
  framermotion,
  next,
  material,
  vue,
  front,
  back,
  datab,
  mtools,
  express,
  mongoose,
  sqlz,
  prisma,
  jwt,
  socket,
  firebase,
  mongo,
  postGres,
  mysql,
  trello,
  miro,
  git,
  valeria,
  zara,
  linkedout,
  portfolio,
} from "../public/index";

export const tools = [
  {
    name: "Trello",
    icon: trello,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Miro",
    icon: miro,
  },
];

export const databases = [
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "PostgreSQL",
    icon: postGres,
  },
];

export const backEnd = [
  {
    name: "Nodejs",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Socket.io",
    icon: socket,
  },
  {
    name: "Json web token",
    icon: jwt,
  },
  {
    name: "fireBase",
    icon: firebase,
  },
  {
    name: "Prisma ORM",
    icon: prisma,
  },
  {
    name: "Mongoose ODM",
    icon: mongoose,
  },
  {
    name: "Sequelize ORM",
    icon: sqlz,
  },
];

export const layers = [
  {
    name: "Front-end",
    icon: front,
  },
  {
    name: "Back-end",
    icon: back,
  },
  {
    name: "Data bases",
    icon: datab,
  },
  {
    name: "Management tools",
    icon: mtools,
  },
];

const frontend = [
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
    name: "Framer motion",
    icon: framermotion,
  },
  {
    name: "Native-base",
    icon: nativebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "React-Native",
    icon: reactNative,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Material UI",
    icon: material,
  },
  {
    name: "Vue.JS",
    icon: vue,
  },
];

const projects = [
  {
    name: "StreamVerse",
    description:
      "StreamVerse is built with cutting-edge technologies to deliver a seamless and engaging user experience. The app is packed with features that allow users to access the latest content, stay updated with their favorite shows, and enjoy smooth streaming all in one place.",
    tags: [
      {
        name: "React-Native CLI",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: streamVerse,
    source_code_link: "https://github.com/Aksel-R/streamVerse.git",
  },
  {
    name: "Valeria Gallery",
    description:
      "Mobile app that allows users to create accounts, share their art, offer premium content or subscribe for a monthly fee to access premium content, and chat with others in a vibrant art-sharing community.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
    ],
    image: valeria,
    source_code_link: "https://github.com/orgs/VALERIA-GALLERY/repositories",
  },
  {
    name: "ZARA clone",
    description:
      "This project is about creating an exact replica of the famous brand ZARA's website.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: zara,
    source_code_link: "https://github.com/Zara-project",
  },
  {
    name: "LinkedOUT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: linkedout,
    source_code_link: "https://github.com/orgs/task-force-org/repositories",
  },
  {
    name: "Personal portfolio",
    description: "In this project I showed my potential in web development.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

const articles = [
  {
    name: "React Native vs. React: Unveiling the Differences and Similarities.",
    description:
      "In the realm of web and mobile app development, React has emerged as one of the most popular JavaScript libraries...",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: ReactV,
    source_code_link:
      "https://medium.com/@yassinrezgui/react-native-vs-react-unveiling-the-differences-and-similarities-13010194d9e6",
  },
  {
    name: "Efficient Web Development with ChatGPT",
    description:
      "Web development has come a long way in recent years, with innovations in AI and machine learning playing a pivotal role in enhancing user experiences...",
    tags: [
      {
        name: "OpenAi chatGPT",
        color: "blue-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link:
      "https://medium.com/@yassinrezgui/efficient-web-development-with-chatgpt-51d6858a063c",
  },
];

export { frontend, projects, articles };