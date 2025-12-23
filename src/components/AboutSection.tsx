import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import moldCloseup from "@/assets/hero-factory.jpg";

const features = [
  "State-of-the-art CNC machining centers",
  "ISO 9001:2015 certified processes",
  "CAD/CAM design capabilities",
  "Rapid prototyping services",
  "In-house quality control lab",
  "Global delivery network",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={moldCloseup}
                alt="Precision injection mold close-up"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-primary p-6 rounded-lg shadow-elevated max-w-xs hidden sm:block"
            >
              <div className="font-display text-5xl font-bold text-primary-foreground">25+</div>
              <div className="text-primary-foreground/80 text-sm mt-1">Years of Industry Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Engineering Excellence in Every Mold
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Since 1998, DENCO Australasia Ltd has been at the forefront of precision mold manufacturing. 
              Our team of skilled engineers and technicians combine decades of experience with 
              cutting-edge technology to deliver molds that exceed industry standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in complex geometries and tight tolerances, serving industries 
              from automotive to medical devices. Every project receives our signature 
              attention to detail and commitment to quality.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
