import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left side - CTA */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl mt-4 mb-6 leading-tight">
              Let's build
              <span className="block text-accent">something great</span>
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full mb-8" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Available for select projects and consulting opportunities. 
              If you're building something meaningful, let's talk.
            </p>
            
            {/* Primary CTA */}
            <motion.a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 bg-accent text-cream px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
          
          {/* Right side - Contact methods & social */}
          <motion.div 
            className="lg:col-span-4 lg:col-start-9 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Email */}
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              label="Email"
              value="mohamedmostafa2011360@gmail.com"
              href="mailto:mohamedmostafa2011360@gmail.com"
              delay={0.3}
            />
            
            {/* LinkedIn */}
            <ContactCard
              icon={<Linkedin className="w-6 h-6" />}
              label="LinkedIn"
              value="Connect on LinkedIn"
              href="https://linkedin.com"
              delay={0.4}
              className="lg:ml-8"
            />
            
            {/* GitHub */}
            <ContactCard
              icon={<Github className="w-6 h-6" />}
              label="GitHub"
              value="View my code"
              href="https://github.com/C0derM0hamed"
              delay={0.5}
            />
          </motion.div>
        </div>
        
        {/* Bottom tagline - centered but offset timing */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm uppercase tracking-wider">
              Strategic Engineering for Modern Products
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ 
  icon, 
  label, 
  value, 
  href,
  delay = 0,
  className = ""
}: { 
  icon: React.ReactNode;
  label: string; 
  value: string; 
  href: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`block bg-card border border-border rounded-2xl p-6 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
            {label}
          </div>
          <div className="text-foreground group-hover:text-accent transition-colors truncate">
            {value}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
