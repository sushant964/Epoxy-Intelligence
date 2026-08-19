import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              35 Years of <br className="hidden sm:block"/>
              <span className="text-brand-orange">Industry Experience</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-brand-silver/80 space-y-6 max-w-3xl leading-relaxed"
            >
              <p>
                For 35 years, Epoxy Intelligence has been part of the concrete coatings industry.
              </p>
              <p>
                Our goal is simple: help customers find the right coating solution for their needs while delivering a professional finished result.
              </p>
              <p>
                With experience across epoxy, polyaspartic, and urethane coating systems, we bring knowledge and practical experience to every conversation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE VISUAL */}
      <section className="py-24 bg-brand-concrete relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Decades of Knowledge. <br className="hidden sm:block"/> One Customer at a Time.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "35+",
                subtitle: "Years in the Industry"
              },
              {
                title: "Concrete Coatings",
                subtitle: "Specialized Focus"
              },
              {
                title: "Systems",
                subtitle: "Epoxy, Polyaspartic, Urethane"
              },
              {
                title: "Customer First",
                subtitle: "Focused on Helping Customers"
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-charcoal border border-white/5 p-10 flex flex-col items-start justify-center h-full hover:border-brand-orange/30 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-4 tracking-tight">
                  {stat.title}
                </div>
                <div className="text-lg font-medium text-brand-silver/90">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-sm overflow-hidden bg-brand-concrete border border-white/10">
                <img
                  src="https://res.cloudinary.com/ermw5sr0/image/upload/v1787165126/f94fadd8dc0bba860e17f553c53f0f02.jpg"
                  alt="Professional concrete review"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Helping You Make the Right Choice
              </h2>
              <p className="text-lg text-brand-silver/80 mb-8 leading-relaxed">
                Concrete coating options can be confusing. Our approach is to understand what you need, explain your options clearly, and help you choose a solution that makes sense for your project.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Assess your specific concrete surface",
                  "Understand your performance requirements",
                  "Recommend the appropriate system",
                  "Deliver a professional result"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-silver">
                    <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                Contact Epoxy Intelligence
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
