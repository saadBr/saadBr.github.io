import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiSpringboot,
  SiPython,
  SiSelenium,
  SiApachekafka,
  SiFlutter,
  SiNodedotjs,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Digital Banking App",
    description:
      "Full-stack banking system with account management, transfers, dashboards, and secure authentication.",
    tech: ["Spring Boot", "Angular", "MongoDB", "Heroku"],
    github: "https://github.com/saadBr/Digital-Banking",
    live: "https://saadbr.me/Digital-Banking",
    icon: <SiSpringboot className="text-green-600 text-6xl" />,
  },
  {
    title: "Chatbot AI (Flutter + OpenAI)",
    description:
      "Mobile app with Flutter + OpenAI GPT. Supports text chat, image upload, and generation.",
    tech: ["Flutter", "Dart", "OpenAI API"],
    github: "https://github.com/saadBr/sbr_chatbot",
    icon: <SiFlutter className="text-blue-500 text-6xl" />,
  },
  {
    title: "MEAN Stack App",
    description:
      "Web app with MongoDB, Express, Angular, Node.js. CRUD + authentication.",
    tech: ["MongoDB", "Express", "Angular", "Node.js"],
    github: "https://github.com/saadBr/MAS",
    icon: <SiNodedotjs className="text-green-700 text-6xl" />,
  },
  {
    title: "ML & Data Science Projects",
    description:
      "Jupyter notebooks for regression, classification, prediction & visualization.",
    tech: ["Python", "Pandas", "NumPy"],
    github: "https://github.com/saadBr/ml-ds-projects",
    icon: <SiPython className="text-yellow-500 text-6xl" />,
  },
  {
    title: "Teachable Video Downloader",
    description:
      "Python & Selenium automation tool to download Teachable videos.",
    tech: ["Python", "Selenium"],
    github: "https://github.com/saadBr/teachable-downloader",
    icon: <SiSelenium className="text-green-400 text-6xl" />,
  },
  {
    title: "Weather Stream App (Kafka)",
    description:
      "Kafka Streams app that processes weather data in real-time.",
    tech: ["Kafka", "Spring Boot"],
    github:
      "https://github.com/saadBr/BigData/tree/main/TP_KafkaStream/weatherStreamApp",
    icon: <SiApachekafka className="text-black text-6xl" />,
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,              
    autoplaySpeed: 2000,        
    pauseOnHover: true,         
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-yellow-400 inline-block">
          Projects
        </h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-[460px] justify-between text-center">
                <div className="mb-4 flex justify-center">{project.icon}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 px-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 text-white px-4 py-2 text-sm rounded hover:bg-gray-900 transition"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}