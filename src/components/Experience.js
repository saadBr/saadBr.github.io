import { FaLaptopCode, FaStore } from "react-icons/fa";

const experiences = [
  {
    role: "IT Analyst (L1 Support)",
    company: "HCL Technologies",
    period: "Jan 2024 – Present",
    description: [
      "Go-to person for incident resolution, training new joiners, and handling escalations.",
      "Worked daily with Active Directory (password resets, account management) and Azure Portal (logs, device assignments, groups).",
      "Bridged communication with German-speaking clients, ensuring fast resolution and client satisfaction.",
    ],
    icon: <FaLaptopCode className="text-blue-600 text-xl" />,
  },
  {
    role: "Franchise Manager",
    company: "Cash Plus – Fes, Morocco",
    period: "Jan 2023 – Jan 2025",
    description: [
      "Managed daily financial services operations, customer support, and compliance.",
      "Handled budgeting, reporting, and business performance in a competitive market.",
      "Strengthened skills in entrepreneurship, leadership, and client relationship management.",
    ],
    icon: <FaStore className="text-green-600 text-xl" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-yellow-400 inline-block">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-yellow-400"></div>

          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 top-2 w-12 h-12 rounded-full bg-white border-2 border-yellow-400 flex items-center justify-center shadow">
                  {exp.icon}
                </div>

                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
