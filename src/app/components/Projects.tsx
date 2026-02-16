import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Analytics Platform",
    category: "Full Stack Development",
    description: "Real-time analytics dashboard serving 10K+ users. Built scalable data pipeline processing 2M events/day.",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTE2MDYxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    results: ["300% faster load times", "99.9% uptime", "$2M ARR achieved"]
  },
  {
    id: 2,
    title: "Mobile Commerce App",
    category: "Product Development",
    description: "Cross-platform shopping experience with seamless checkout flow. Optimized for conversion.",
    image: "https://images.unsplash.com/photo-1641862039942-5815d8f74938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3MTA2OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "TypeScript", "Stripe", "Firebase"],
    results: ["40% conversion increase", "4.8 App Store rating", "100K+ downloads"]
  },
  {
    id: 3,
    title: "Enterprise Workflow Tool",
    category: "System Architecture",
    description: "Custom workflow automation for Fortune 500 client. Replaced legacy system with modern stack.",
    image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2ViJTIwYXBwbGljYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMTYwNjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Next.js", "GraphQL", "AWS", "Docker"],
    results: ["80% time saved", "5,000+ users migrated", "Zero downtime migration"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header - offset */}
        <motion.div 
          className="max-w-2xl mb-20 lg:ml-[8%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm uppercase tracking-wider">Selected Work</span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">
            Projects that moved
            <span className="block text-accent">the needle</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full" />
        </motion.div>
        
        {/* Projects grid - asymmetric layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  // Keep project id=2 aligned like projects 1 and 3 (non-reversed layout)
  const isEven = index % 2 === 0 || project.id === 2;
  
  return (
    <motion.div
      className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Image side */}
      <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-1' : 'lg:col-start-6'}`}>
        <motion.div 
          className="relative group overflow-hidden rounded-2xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/5 transition-colors z-10" />
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] object-cover"
          />
        </motion.div>
      </div>
      
      {/* Content side */}
      <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-8' : 'lg:col-start-1'} space-y-6`}>
        <div>
          <span className="text-accent text-sm uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl mt-3 mb-4 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <div className="h-1 w-12 bg-accent/50 rounded-full mb-6" />
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Results */}
        <div className="space-y-3 pt-4">
          {project.results.map((result, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span className="text-foreground">{result}</span>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.button
          className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all mt-6"
          whileHover={{ x: 4 }}
        >
          View Case Study
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
