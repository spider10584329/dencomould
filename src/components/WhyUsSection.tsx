import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Shield, Users, Truck, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "ISO Certified Quality",
    description: "All processes certified to ISO 9001:2015 standards ensuring consistent quality.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% on-time delivery rate with expedited options for urgent projects.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Every mold undergoes rigorous testing and comes with our quality guarantee.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "60+ skilled engineers and technicians with decades of combined experience.",
  },
  {
    icon: Truck,
    title: "Global Shipping",
    description: "Worldwide delivery with careful packaging and full insurance coverage.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support and after-sales service.",
  },
];

const stats = [
  { value: "500+", label: "Molds Delivered" },
  { value: "200+", label: "Global Clients" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "15+", label: "Countries Served" },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Your Trusted Manufacturing Partner
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine technical expertise with customer-focused service to deliver 
            mold solutions that drive your success.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-background rounded-lg border border-border"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
