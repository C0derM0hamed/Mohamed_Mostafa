import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-2 h-32 bg-accent rounded-full opacity-60" />
      <div className="absolute bottom-32 left-[8%] w-1 h-24 bg-accent/40 rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main content - offset layout */}
          <motion.div 
            className="lg:col-span-7 lg:col-start-1 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-8">
              {/* Small accent */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm tracking-wider text-muted-foreground uppercase">Full Stack Developer</span>
              </div>
              
              {/* Hero statement */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
                Building products
                <span className="block mt-2">that drive</span>
                <span className="block mt-2 text-accent">real growth</span>
              </h1>
              
              {/* Value statement */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Strategic full-stack engineering for founders and teams who need scalable solutions, 
                not just code.
              </p>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 bg-accent text-cream px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Work With Me
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Profile Image & Metrics - asymmetric placement */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end gap-8">
            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Professional Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay for color harmony */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/0 via-transparent to-midnight-blue/20" />
              </div>
              
              {/* Accent ring decoration */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full border-4 border-accent/40 border-t-accent border-r-accent" />
            </motion.div>
            
            {/* Floating metric cards */}
            <motion.div 
              className="space-y-6 w-full max-w-xs lg:max-w-none"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <MetricCard 
                number="2+"
                label="Years Experience"
                delay={0.4}
              />
              <MetricCard 
                number="5+"
                label="Projects Delivered"
                delay={0.5}
                className="lg:ml-12"
              />
              <MetricCard 
                number="4+"
                label="Happy Clients"
                delay={0.6}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ 
  number, 
  label, 
  delay = 0,
  className = ""
}: { 
  number: string; 
  label: string; 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`bg-card border border-border rounded-2xl p-6 backdrop-blur-sm shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-semibold text-accent mb-2">
        {number}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}