import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion & Animations",
      "State Management",
      "Responsive Design"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js & Express",
      "Python & Django",
      "PostgreSQL & MongoDB",
      "GraphQL & REST APIs",
      "Redis & Caching",
      "Microservices"
    ]
  },
  {
    title: "DevOps",
    skills: [
      "AWS & Cloud Infrastructure",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Monitoring & Logging",
      "Performance Optimization",
      "Security Best Practices"
    ]
  },
  {
    title: "Product",
    skills: [
      "System Architecture",
      "Database Design",
      "API Design",
      "Technical Strategy",
      "Code Review & Mentoring",
      "Agile & Scrum"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-[5%] w-1 h-40 bg-accent/30 rounded-full" />
      <div className="absolute bottom-20 right-[10%] w-2 h-24 bg-accent/20 rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div 
          className="max-w-2xl mb-20 lg:ml-auto lg:mr-[10%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">
            Full-stack mastery
            <span className="block text-accent">from idea to scale</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full" />
        </motion.div>
        
        {/* Skills grid - asymmetric, organic layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`${
                categoryIndex === 1 ? 'md:translate-y-12' : ''
              } ${
                categoryIndex === 3 ? 'md:translate-y-8' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group h-full">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <div className="w-6 h-6 rounded-lg bg-accent/50" />
                  </div>
                  <h3 className="text-2xl group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom statement - offset */}
        <motion.div 
          className="mt-20 lg:ml-[15%] max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-foreground">
              Technology is the tool, not the goal. I choose the right stack for your specific 
              needs, prioritizing maintainability, performance, and team velocity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
