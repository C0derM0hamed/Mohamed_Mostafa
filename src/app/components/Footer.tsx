import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-12 relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-semibold">
              <span className="text-accent">Mohamed Mostafa</span>
            </div>
            <span className="text-muted-foreground">
              Full Stack Developer
            </span>
          </motion.div>
          
          {/* Right side */}
          <motion.div 
            className="flex items-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>© {currentYear}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Built with precision</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Designed for impact</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
