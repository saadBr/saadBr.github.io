import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiCredly } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-yellow-400">Saad El Mabrouk</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          IT Analyst | Full-Stack Developer | Big Data & Cloud Computing Student
        </p>
        <div className="flex space-x-8 justify-center">
          <a href="https://github.com/saadBr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-3xl transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/saadelmabrouk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-3xl transition"><FaLinkedin /></a>
          <a href="mailto:saadelmabrouk18@gmail.com" className="text-gray-400 hover:text-yellow-400 text-3xl transition"><FaEnvelope /></a>
          <a href="https://www.credly.com/users/saad-el-mabrouk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 text-3xl transition"><SiCredly /></a>
        </div>
      </div>
    </section>
  );
}
