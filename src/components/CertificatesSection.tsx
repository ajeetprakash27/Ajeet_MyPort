import { Award, ExternalLink } from "lucide-react";

// 🔹 Map issuer → icon path
const issuerIcons = {
  Microsoft: "/icons/MS.jpeg",
  LinkedIn: "/icons/LKD.jpeg",
  AWS: "/icons/AWS.jpeg",
  Google: "/icons/GG.jpeg",
  IBM: "/icons/IBM.jpeg", // add later if you upload ibm icon
  HackerRank: "/icons/HR.jpeg",
  Forage: "/icons/FG.jpeg",
  Udemy: "/icons/UD.jpeg",
  GreekfGreek: "/icons/GFG.jpeg",
};

const certificates = [
  {
    title: "Published Paper",
    issuer: "INTERNATIONAL JOURNAL OF NOVEL RESEARCH AND DEVELOPMENT (IJNRD)",
    year: "2026",
    tags: ["AI", "Project", "Integrated Academic Management"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Microsoft Azure AI Essentials",
    issuer: "Microsoft & LinkedIn",
    year: "2025",
    tags: ["AI", "Cloud", "Azure"],
    color: "from-blue-500 to-cyan-500",
    icon: issuerIcons.Microsoft,
  },
  {
    title: "AI for Bharat (AWS)",
    issuer: "Hack2skill",
    year: "2025",
    tags: ["AI", "Machine Learning", "AWS", "Bedrock"],
    color: "from-purple-500 to-pink-500",
    icon: issuerIcons.AWS,
  },
  {
    title: "Google Cloud Study Jam",
    issuer: "Google Developer Groups",
    year: "2025",
    tags: ["GDSC", "Cloud"],
    color: "from-blue-500 to-cyan-500",
    icon: issuerIcons.Google,
  },
  {
    title: "IBM Datathon",
    issuer: "IBM",
    year: "2025",
    tags: ["ML", "IBM", "Data Analytics"],
    color: "from-blue-500 to-cyan-500",
    icon: issuerIcons.IBM,
  },
  {
    title: "Artificial Intelligence",
    issuer: "LinkedIn",
    year: "2025",
    tags: ["AI", "Machine Learning"],
    color: "from-purple-500 to-pink-500",
    icon: issuerIcons.LinkedIn,
  },
  {
    title: "Microsoft Copilot: Prompt Writing",
    issuer: "LinkedIn",
    year: "2025",
    tags: ["AI", "Prompt Engineering"],
    color: "from-green-500 to-emerald-500",
    icon: issuerIcons.LinkedIn,
  },
   {
    title: 'GreekfGreek Workshop',
    issuer: 'GreekfGreek',
    year: '2025',
    tags: ['DSA Interview', 'Portfolio Development'],
    color: 'from-green-500 to-emerald-500',
    icon: issuerIcons.GreekfGreek,
  },
  {
    title: "MySQL Certification",
    issuer: "HackerRank",
    year: "2025",
    tags: ["Database", "SQL"],
    color: "from-orange-500 to-amber-500",
    icon: issuerIcons.HackerRank,
  },
   {
    title: 'Python Programming',
    issuer: 'Udemy',
    year: '2025',
    tags: ['Python', 'Programming'],
    color: 'from-yellow-500 to-orange-500',
    icon: issuerIcons.Udemy,
  },
  {
    title: 'Mastercard – Cybersecurity Job Simulation',
    issuer: 'Forage',
    year: '2024',
    tags: ['Cybersecurity'],
    color: 'from-orange-500 to-amber-500',
    icon: issuerIcons.Forage,
  },
  {
    title: 'Cognizant - Agile Methodology Job Simulation',
    issuer: 'Forage',
    year: '2023',
    tags: ['Agile Methodology'],
    color: 'from-purple-500 to-pink-500',
    icon: issuerIcons.Forage,
  },
  {
    title: 'Accenture North America – Data Analytics and Visualization Job Simulation',
    issuer: 'Forage',
    year: '2023',
    tags: ['Data Visualization'],
    color: 'from-red-500 to-rose-500',
    icon: issuerIcons.Forage,
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Certificates & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group glass-card p-6 hover:neon-border transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon & Year */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}
                >
                  {cert.icon ? (
                    <img
                      src={cert.icon}
                      alt={cert.issuer}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <Award className="w-6 h-6 text-white" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {cert.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {cert.issuer}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={14} />
                View Credential
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificatesSection;
