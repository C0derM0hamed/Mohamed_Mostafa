import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Decorative accent line */}
      <div className="absolute left-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left side - Product-focused value prop */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-32">
              <span className="text-accent text-sm uppercase tracking-wider">About</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-6 leading-tight">
                Engineering meets
                <span className="block text-accent">product thinking</span>
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                I bridge the gap between technical execution and business outcomes. 
                Every line of code serves a purpose.
              </p>
            </div>
          </motion.div>
          
          {/* Right side - Value statements in asymmetric cards */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <ValueCard 
              title="Strategic Architecture"
              description="Building systems that scale with your business, not against it. Clean code, smart decisions, zero technical debt."
              delay={0.2}
            />
            
            <ValueCard 
              title="Product-First Approach"
              description="Every feature is measured by impact. I translate business goals into technical roadmaps that actually work."
              delay={0.3}
              className="lg:ml-12"
            />
            
            <ValueCard 
              title="End-to-End Execution"
              description="From database design to user interface polish. One engineer who understands the full stack means faster shipping."
              delay={0.4}
            />
            
            <ValueCard 
              title="Partnership, Not Just Code"
              description="Your success is the metric that matters. I'm invested in outcomes, not hours logged."
              delay={0.5}
              className="lg:ml-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ 
  title, 
  description, 
  delay = 0,
  className = ""
}: { 
  title: string; 
  description: string; 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
