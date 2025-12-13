import { GraduationCap, Code2, Database, Wrench } from 'lucide-react';

const skills = [
  { category: 'Programming', items: ['Python', 'Java', 'JavaScript', 'HTML/CSS'], icon: Code2 },
  { category: 'Backend & Database', items: ['Node.js', 'Spring Boot', 'MySQL', 'MongoDB'], icon: Database },
  { category: 'Tools & Platforms', items: ['Git', 'VS Code', 'PyCharm', 'Advanced Excel'], icon: Wrench },
];

const skillLevels = [
  { name: 'Python', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 70 },
  { name: 'MySQL', level: 80 },
  { name: 'Machine Learning', level: 70 },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Know <span className="gradient-text">Who I Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio & Education */}
          <div className="space-y-8">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Bio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science Engineering fresher with academic and project experience in 
                Full Stack Java Development, AI/ML, and Python programming. Proficient in 
                developing web applications, implementing machine learning models, and database 
                management. Interested in contributing to software development projects and 
                growing as a technology professional.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                  <p className="text-lg font-medium text-foreground">Bachelor of Engineering</p>
                  <p className="text-muted-foreground">Computer Science Engineering</p>
                  <p className="text-muted-foreground">Visvesvaraya Technological University, Bengaluru</p>
                  <p className="text-primary font-medium mt-2">CGPA: 7.24/10 | Class of 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {/* Skill Bars */}
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Technical Proficiency</h3>
              <div className="space-y-4">
                {skillLevels.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Categories */}
            <div className="grid gap-4">
              {skills.map((category) => (
                <div
                  key={category.category}
                  className="glass-card p-4 flex items-center gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{category.category}</h4>
                    <p className="text-xs text-muted-foreground">{category.items.join(' • ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
