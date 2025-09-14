import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "Mars 2025",
    link: "https://learn.microsoft.com/en-us/users/saadelmabrouk-8787/transcript/d493qf5k431n39k?wt.mc_id=pvue_msft_webpage_wwl+&source=docs&tab=credentials-tab", 
    status: "completed",
  },
  {
    title: "ÖSD German Certificate (B2)",
    issuer: "ÖSD",
    year: "April 2022",
    link: "https://drive.google.com/file/d/1p8FchmsYijpesUk8nCxqGD3oeFllgv44/view", 
    status: "completed",
  },
  {
    title: "Java SE 21 Developer",
    issuer: "Oracle",
    year: "In Progress",
    link: null, 
    status: "in-progress",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-yellow-400 inline-block">
          Certifications
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 flex justify-between items-center transition ${
                cert.status === "in-progress" ? "opacity-60" : "hover:shadow-lg"
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-gray-600">
                  {cert.issuer} • {cert.year}
                </p>
              </div>

              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-600 text-2xl"
                >
                  <FaCertificate />
                </a>
              ) : (
                <FaCertificate className="text-gray-400 text-2xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
