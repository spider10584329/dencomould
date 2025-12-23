import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Cog, Layers, Wrench, Zap, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import moldCloseup from "@/assets/mold-closeup.jpg";
import dieCasting from "@/assets/die-casting.jpg";
import cncMachining from "@/assets/cnc-machining.jpg";

const services = [
  {
    icon: Layers,
    title: "Injection Mold Design",
    description: "Custom injection molds engineered for high-volume production with exceptional precision and durability.",
    image: moldCloseup,
    features: [
      "Custom mold design and engineering",
      "High-volume production capability",
      "Precision tolerances up to ±0.005mm",
      "Multi-cavity mold options",
    ],
  },
  {
    icon: Zap,
    title: "Die Casting Molds",
    description: "High-quality die casting molds for aluminum, zinc, and magnesium alloy applications.",
    image: dieCasting,
    features: [
      "Aluminum, zinc & magnesium alloys",
      "Hot and cold chamber die casting",
      "High-pressure die casting expertise",
      "Rapid prototyping available",
    ],
  },
  {
    icon: Cog,
    title: "CNC Precision Machining",
    description: "State-of-the-art CNC machining for complex components with tolerances as tight as ±0.001mm.",
    image: cncMachining,
    features: [
      "5-axis CNC machining centers",
      "EDM wire cutting & sinker EDM",
      "Surface grinding & polishing",
      "Quality inspection & reporting",
    ],
  },
  {
    icon: Wrench,
    title: "Mold Repair & Maintenance",
    description: "Expert mold repair, refurbishment, and preventive maintenance services to extend mold life.",
    image: moldCloseup,
    features: [
      "Emergency repair services",
      "Preventive maintenance programs",
      "Mold refurbishment & upgrades",
      "Spare parts manufacturing",
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-card to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Comprehensive Mold <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From design to delivery, we provide end-to-end mold manufacturing services 
              tailored to your specific requirements. Our expertise spans across industries 
              with a commitment to precision and quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" ref={ref}>
        <div className="section-container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">
                      Get a Quote <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contact our team today for a free consultation and quote. 
              We're here to help bring your vision to life.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
