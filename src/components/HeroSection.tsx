import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import heroImage from "@/assets/hero-manufacturing.jpg";

export const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || 
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial mold manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          isDark 
            ? "bg-gradient-to-r from-background via-background/70 to-background/30" 
            : "bg-gradient-to-r from-background/80 via-background/60 to-background/10"
        }`} />
        <div className={`absolute inset-0 ${
          isDark 
            ? "bg-gradient-to-t from-background via-transparent to-background/20" 
            : "bg-gradient-to-t from-background/70 via-transparent to-background/1"
        }`} />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium uppercase tracking-wider">
              30+ Years Molding Experience & Toolmaking Consulting
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Precision Mold
            <br />
            <span className="text-gradient">Manufacturing</span>
            <br />
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl  max-w-xl mb-8 leading-relaxed"
          >
            From concept to completion, we deliver high-precision molds for injection molding, 
            die casting, and custom tooling. Your vision, engineered to perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">
                <Play className="mr-2 w-5 h-5" />
                Our Services
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "30+", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>      
    </section>
  );
};
