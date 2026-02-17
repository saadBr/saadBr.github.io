function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center border-b-4 border-yellow-400 inline-block">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-justify">
          <p>
            I’m <span className="font-bold text-indigo-600">Saad El Mabrouk</span>, 
            German-speaking IT Analyst supporting DACH users. I handle L1/L2 incidents, escalations, and onboarding/training for new joiners, working daily with Azure Portal, Microsoft 365, and Active Directory.
            Alongside support, I build Java/Spring and full-stack apps and automate workflows with Python—currently finishing my Master’s in Big Data & Cloud Computin
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
