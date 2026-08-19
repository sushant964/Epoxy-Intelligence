import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Epoxy Flooring",
      desc: "Professional epoxy flooring solutions designed to transform concrete surfaces with a clean, durable, finished appearance."
    },
    {
      id: "02",
      title: "Epoxy Coatings",
      desc: "Versatile epoxy coating solutions for customers looking to improve and protect their concrete surfaces."
    },
    {
      id: "03",
      title: "Polyaspartic Coatings",
      desc: "High-performance polyaspartic coating solutions for customers looking for a professional concrete coating system."
    },
    {
      id: "04",
      title: "Urethane Coatings",
      desc: "Urethane coating solutions offering another professional option for concrete surfaces."
    }
  ];

  return (
    <div className="w-full pt-10">
      {/* HEADER */}
      <section className="bg-brand-charcoal py-20 lg:py-32 border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Concrete Coatings <br />
              <span className="text-brand-orange">& Epoxy Flooring</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-brand-silver/80 max-w-2xl"
            >
              Explore our high-performance concrete coating solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border border-white/10 bg-brand-concrete/30 p-10 hover:border-brand-orange/50 transition-colors"
              >
                <div className="text-brand-orange text-sm font-bold tracking-wider mb-4 font-mono">
                  SERVICE {service.id}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-silver/80 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CTA */}
      <section className="py-24 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-brand-charcoal">
              Not Sure Which Coating Is Right for You?
            </h2>
            <p className="text-xl font-medium text-brand-charcoal/80 mb-10">
              We're here to help you understand your options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-brand-charcoal hover:bg-brand-dark text-white px-8 py-4 font-bold text-lg transition-colors inline-flex items-center justify-center gap-2 shadow-xl"
              >
                Talk to an Expert
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+19096455325"
                className="bg-transparent border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white px-8 py-4 font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +1 909-645-5325
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
