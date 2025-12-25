import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Package, Ruler, Shield, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import product1 from "@/assets/product_1.jpg";
import product2 from "@/assets/product_2.jpg";
import product3 from "@/assets/product_3.jpg";

const products = [
  {
    id: 1,
    name: "Precision Injection Molds",
    category: "Injection Molding",
    description: "High-precision injection molds designed for automotive, medical, and consumer electronics industries.",
    image: product1,
    specs: ["Multi-cavity design", "Hot runner systems", "Tolerance: ±0.005mm"],
  },
  {
    id: 2,
    name: "Aluminum Die Cast Molds",
    category: "Die Casting",
    description: "Durable die casting molds engineered for high-pressure aluminum casting applications.",
    image: product2,
    specs: ["H13 tool steel", "Thermal management", "500K+ shot life"],
  },
  {
    id: 3,
    name: "CNC Machined Components",
    category: "CNC Machining",
    description: "Precision-machined components for mold bases, inserts, and custom tooling requirements.",
    image: product3,
    specs: ["5-axis capability", "EDM finishing", "Mirror polish available"],
  },
];

const categories = ["All", "Injection Molding", "Die Casting", "CNC Machining"];

const Products = () => {
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
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Products</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Premium Mold <span className="text-gradient">Products</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our range of precision molds and tooling solutions. Each product is 
              engineered with meticulous attention to detail and manufactured to the highest 
              industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-10 border-y border-border bg-card/50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Quality Guaranteed" },
              { icon: Ruler, label: "Precision Engineering" },
              { icon: Star, label: "Industry Leading" },
              { icon: Package, label: "Global Delivery" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center gap-3 text-muted-foreground"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20" ref={ref}>
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full group/btn mt-auto" asChild>
                    <Link to="/contact">
                      Request Quote
                      <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
              Can't Find What You Need?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We specialize in custom mold solutions. Contact us with your specifications 
              and our engineering team will work with you to develop the perfect solution.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Request Custom Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;
