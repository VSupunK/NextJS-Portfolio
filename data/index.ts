import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize user experience and design",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Coding.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Undergraduate BSc(Hons) in Computing & Information Systems",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Student Management Dashboard",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AgroPulse - AI Powered Insect Detection App",
    des: "AgroPulse is an AI-powered web app for efficient pest detection and crop management.",
    img: "/Project_GIF3.gif",
    iconLists: ["/re.svg", "/tail.svg", "/git.svg"],
    link: "https://github.com/VSupunK/AgroPulse",
  },
  {
    id: 2,
    title: "Nike Website ",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/Project_GIF2.gif",
    iconLists: ["/re.svg", "/tail.svg", "/git.svg"],
    link: "https://vsupunk.github.io/Nike-Website/",
  },
  {
    id: 3,
    title: "Travel and Tour Website",
    des: "A travel and tour website with a modern design and smooth animations.",
    img: "/Project_GIF1.gif",
    iconLists: ["/re.svg", "/tail.svg", "/git.svg"],
    link: "https://github.com/VSupunK/Travel-and-Tour-Website",
  },
  {
    id: 4,
    title: "School Management System - Dashboard",
    des: "A student management dashboard for teachers and students to manage their daily tasks.",
    img: "/Project_GIF4.gif",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/git.svg"],
    link: "https://github.com/VSupunK/School-Management-System-Dashboard",
  },
];

export const testimonials = [
  {
    quote:
      "Technology is best when it brings people together. The ultimate aim of IT is not only innovation but also the enhancement of human lives.",
    name: "Matt Mullenweg",
    title: "Co-Founder of WordPress",
    image: "Matt_Mullenweg.jpg",
  },
  {
    quote:
      "The biggest part of our digital transformation is changing the way we think. Technology alone doesn’t create value; it’s the people and their creativity.",
    name: "Satya Nadella",
    title: "CEO of Microsoft",
    image: "Satya_Nadella.jpg",
  },
  {
    quote:
      "It's not about ideas. It's about making ideas happen. In IT, execution is everything, and passion drives innovation.",
    name: "Scott Belsky",
    title: "Chief Product Officer at Adobe",
    image: "Scott_Belsky.jpeg",
  },
  {
    quote:
      "You can achieve great things with a great team. Technology is just a tool—collaboration and connection are what make it powerful.",
    name: "Tim Cook",
    title: "CEO of Apple",
    image: "Tim Cook.jpg",
  },
  {
    quote:
      "Don’t just build a product; solve a problem. The IT industry thrives on creating meaningful, user-centric solutions.",
    name: "Susan Wojcicki",
    title: "Former CEO of YouTube",
    image: "Susan_Wojcicki.jpg",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "JavaScript",
//     img: "/techStack_Icons/js.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const companies = [
  {
    id: 1,
    name: "Figma",
    img: "/techStack_Icons/figma.svg",
  },
  {
    id: 2,
    name: "Git",
    img: "/techStack_Icons/git.svg",
  },
  {
    id: 3,
    name: "HTML5",
    img: "/techStack_Icons/html5.svg",
  },
  {
    id: 4,
    name: "JavaScript",
    img: "/techStack_Icons/js.svg",
  },
  {
    id: 5,
    name: "Laravel",
    img: "/techStack_Icons/laravel.svg",
  },
  {
    id: 6,
    name: "Material-UI",
    img: "/techStack_Icons/material-ui.svg",
  },
  {
    id: 7,
    name: "MongoDB",
    img: "/techStack_Icons/mongodb.svg",
  },
  {
    id: 8,
    name: "MySQL",
    img: "/techStack_Icons/mysql.svg",
  },
  {
    id: 9,
    name: "Netlify",
    img: "/techStack_Icons/netlify.svg",
  },
  {
    id: 10,
    name: "Next.js",
    img: "/techStack_Icons/nextjs.svg",
  },
  {
    id: 11,
    name: "Node.js",
    img: "/techStack_Icons/nodejs.svg",
  },
  {
    id: 12,
    name: "NPM",
    img: "/techStack_Icons/npm.svg",
  },
  {
    id: 13,
    name: "PHP",
    img: "/techStack_Icons/php.svg",
  },
  {
    id: 14,
    name: "Postman",
    img: "/techStack_Icons/postman.svg",
  },
  {
    id: 15,
    name: "Python",
    img: "/techStack_Icons/python.svg",
  },
  {
    id: 16,
    name: "React.js",
    img: "/techStack_Icons/reactjs.svg",
  },
  {
    id: 17,
    name: "Tailwind CSS",
    img: "/techStack_Icons/tailwind.svg",
  },
  {
    id: 18,
    name: "Vite",
    img: "/techStack_Icons/vitejs.svg",
  },
  {
    id: 19,
    name: "Visual Studio",
    img: "/techStack_Icons/vs.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Developer",
    desc: "Worked on multiple development projects, delivering dynamic and responsive web applications using MERN stack.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    desc: "Designed intuitive and user-friendly interfaces for web and mobile platforms using tools like Figma and Adobe XD.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Graphic Designer",
    desc: "Provided graphic design and video editing services to clients, creating visually appealing content and branding solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Designer - SabraXtreme 2024",
    desc: "Led the design team for a major tech event, delivering creative assets and ensuring a consistent visual identity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/VSupunK/",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/supun-kalhara-150529249/",
  },
  {
    id: 3,
    img: "/medium.svg",
    link: "https://medium.com/@vsupunkalhara/",
  },
  {
    id: 4,
    img: "/youtube.svg",
    link: "https://www.youtube.com/channel/UCxFhgyEujWl5CXKLGTlXJ0Q",
  },
];
