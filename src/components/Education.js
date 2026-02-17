import { FaUniversity } from "react-icons/fa";

const education = [
  {
    title: "Master’s in Computer Engineering – Big Data & Cloud Computing",
    institution: "ENSET Mohammedia",
    period: "Oct 2024 – Present (Currently in 2nd Year)",
    icon: <FaUniversity className="text-yellow-500 text-2xl" />,
  },
  {
    title: "Vocational Bachelor’s in Information Systems & Communication Development",
    institution: "EST Meknes",
    period: "Oct 2019 – Jun 2020",
    icon: <FaUniversity className="text-blue-500 text-2xl" />,
  },
  {
    title: "DUT in Computer Engineering – Database Administration",
    institution: "EST Fes",
    period: "Sep 2017 – Jun 2019",
    icon: <FaUniversity className="text-green-500 text-2xl" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-yellow-400 inline-block">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition">
              <div className="flex-shrink-0">{edu.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
