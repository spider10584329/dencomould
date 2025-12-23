import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Cog, Layers, Wrench, Zap } from "lucide-react";
import moldCloseup from "@/assets/mold-closeup.jpg";
import dieCasting from "@/assets/die-casting.jpg";
import cncMachining from "@/assets/cnc-machining.jpg";

const services = [
  {
    icon: Layers,
    title: "Injection Mold Design",
    description: "Custom injection molds engineered for high-volume production with exceptional precision and durability.",
    image: moldCloseup,
  },
  {
    icon: Zap,
    title: "Die Casting Molds",
    description: "High-quality die casting molds for aluminum, zinc, and magnesium alloy applications.",
    image: dieCasting,
  },
  {
    icon: Cog,
    title: "CNC Precision Machining",
    description: "State-of-the-art CNC machining for complex components with tolerances as tight as ±0.001mm.",
    image: cncMachining,
  },
  {
    icon: Wrench,
    title: "Mold Repair & Maintenance",
    description: "Expert mold repair, refurbishment, and preventive maintenance services to extend mold life.",
    image: moldCloseup,
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Comprehensive Mold Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From design to delivery, we provide end-to-end mold manufacturing services 
            tailored to your specific requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
