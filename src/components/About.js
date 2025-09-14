function About() {
  return (
    <section id="about" className="py-24 px-8 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center border-b-4 border-yellow-400 inline-block">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            I’m <span className="font-bold text-indigo-600">Saad El Mabrouk</span>, 
            an IT Analyst and <span className="font-bold">Big Data & Cloud Computing</span> Master’s student 
            who thrives on solving problems and building things that make an impact.
          </p>
          <p>
            At <span className="font-semibold">HCL Technologies</span>, I became the go-to person on my team: 
            training new joiners, handling critical escalations, and resolving incidents quickly, 
            all while bridging communication with German-speaking clients.
          </p>
          <p>
            Beyond support, I’ve built <span className="font-semibold">full-stack applications </span> 
            with Spring Boot, Angular, and MongoDB, automated workflows with Python & Selenium, 
            and developed <span className="font-semibold">machine learning models</span> that turn data into insight.
          </p>
          <p>
            What sets me apart? I combine <span className="italic">hands-on technical skill </span> 
            with <span className="italic">adaptability and drive</span> whether it’s cloud deployments, 
            data science, or solving a complex support case, I bring energy, curiosity, 
            and a results-oriented mindset. 
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
