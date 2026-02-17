import { FaLaptopCode, FaStore } from "react-icons/fa";

const experiences = [
  {
    role: "IT Analyst German Speaking",
    company: "HCL Technologies",
    period: "Jan 2024 – Present",
    description: [
      "Deliver technical support to enterprise users across the DACH region, handling incidents related to Microsoft 365, Active Directory, Azure Portal, and Windows environments.",
      "Manage end-to-end incident lifecycle, consistently maintaining high SLA compliance and resolution efficiency.",
      "Perform advanced troubleshooting, including account management, access control, system configuration, and remote diagnostics.",
      "Escalate complex L2 cases with detailed technical analysis, reducing resolution time.",
      "Identify recurring issues and contribute to internal knowledge base optimization to enhance FCR rates.",
      "Awarded Best Performer of the Quarter (3×) for consistent high-quality delivery, SLA adherence, and CSAT.",
    ],
    icon: <FaLaptopCode className="text-blue-600 text-xl" />,
  },
  {
    role: "Franchise Manager",
    company: "Cash Plus – Fes, Morocco",
    period: "Jan 2023 – Jan 2025",
    description: [
      "Led licensed branch operations, managed financial workflows, and ensured compliance.",
      "Delivered consistent client service while supervising transactions and reporting.",
      "Gained end-to-end leadership experience in a high-responsibility financial role.",
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
