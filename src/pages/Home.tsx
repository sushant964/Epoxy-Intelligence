import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Layers, Droplets, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574360773950-77a8d56b0d91?q=80&w=2940&auto=format&fit=crop"
            alt="Premium epoxy flooring"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-charcoal/80 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/70 to-brand-charcoal/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="bg-brand-orange/20 border border-brand-orange/50 text-brand-orange px-4 py-1.5 rounded-sm inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                35 YEARS OF INDUSTRY EXPERIENCE
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            >
              35 Years of Experience. <br className="hidden md:block" />
              <span className="text-brand-silver">A Smarter Approach to Concrete.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-silver/80 mb-10 max-w-2xl leading-relaxed"
            >
              Epoxy Intelligence delivers high-performance concrete coating solutions with decades of industry experience and a customer-first approach.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 font-semibold text-lg transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+19096455325"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 font-semibold text-lg transition-colors flex items-center justify-center w-full sm:w-auto"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-24 bg-brand-charcoal relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Experience That Shows <br className="hidden sm:block" />
                <span className="text-brand-silver">in Every Floor</span>
              </h2>
              <div className="space-y-6 text-brand-silver/80 text-lg">
                <p>
                  With 35 years in the industry, Epoxy Intelligence is focused on helping customers find the right concrete coating solution for their needs.
                </p>
                <p>
                  From epoxy and polyaspartic systems to urethane coatings, we focus on quality, performance, and a professional finished appearance.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-brand-orange hover:text-white font-semibold group transition-colors"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-brand-concrete relative z-10">
                <img
                  src="https://res.cloudinary.com/ermw5sr0/image/upload/v1787165125/5be0592f70a3530a7bc654fdc66f065e.jpg"
                  alt="Professional concrete application"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>
              {/* Decorative industrial square */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-brand-orange/30 z-0 hidden sm:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY EPOXY INTELLIGENCE */}
      <section className="py-24 bg-brand-concrete">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Epoxy Intelligence?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "35 Years of Experience",
                desc: "Decades of hands-on industry experience."
              },
              {
                icon: Layers,
                title: "High-Performance Coatings",
                desc: "Professional coating solutions designed for demanding surfaces."
              },
              {
                icon: Droplets,
                title: "Multiple Coating Options",
                desc: "Epoxy, polyaspartic, and urethane systems."
              },
              {
                icon: Users,
                title: "Customer Focused",
                desc: "Here to help customers find the right solution for their needs."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-charcoal p-8 border border-white/5 hover:border-brand-orange/30 transition-colors group"
              >
                <feature.icon className="w-10 h-10 text-brand-orange mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-silver/70">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER SECTION */}
      <section className="py-24 bg-brand-concrete border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Concrete. Your Needs. The Right Solution.
              </h2>
              <p className="text-brand-silver/80 text-lg mb-8">
                Every project is different. Epoxy Intelligence is here to help you understand your options and choose a coating solution that fits your needs.
              </p>
              <div className="space-y-4 mb-10">
                {['Understanding your requirements', 'Explaining your options clearly', 'No pressure, just professional guidance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-brand-silver font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
              <Link
                to="/contact"
                className="bg-brand-charcoal border border-white/10 hover:border-brand-orange text-white px-8 py-5 text-center font-bold text-lg transition-all"
              >
                Talk With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden bg-brand-charcoal text-center">
        {/* Subtle background texture/gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/10 via-brand-charcoal to-brand-charcoal pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your Concrete?
            </h2>
            <p className="text-xl text-brand-silver/80 mb-12">
              Let's talk about your flooring and coating needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-10 py-4 font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+19096455325"
                className="bg-transparent border border-white/20 hover:border-white/40 text-white px-10 py-4 font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Call +1 909-645-5325
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
