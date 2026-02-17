import { FaJava, FaPython, FaReact, FaAngular, FaDocker, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiApachekafka , SiTensorflow, SiPandas, SiNumpy, SiOpenai, SiLangchain, SiFlutter } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-red-600 text-3xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600 text-3xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-blue-500 text-3xl" /> },
  { name: "Angular", icon: <FaAngular className="text-red-500 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-3xl" /> },
  { name: "Kafka", icon: <SiApachekafka className="text-black text-3xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" /> },
  { name: "Linux", icon: <FaLinux className="text-black text-3xl" /> },
  { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-3xl" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-600 text-3xl" /> },
  { name: "Pandas", icon: <SiPandas className="text-black text-3xl" /> },
  { name: "Chatbot", icon: <SiOpenai className="text-gray-800 text-3xl" /> },
  { name: "Agent AI", icon: <SiLangchain className="text-green-500 text-3xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-3xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center border-b-4 border-yellow-400 inline-block">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="p-6 bg-white rounded-xl shadow hover:shadow-lg flex flex-col items-center transition">
              {skill.icon}
              <p className="mt-3 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
