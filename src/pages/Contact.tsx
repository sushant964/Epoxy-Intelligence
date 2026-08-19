import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Instagram, ChevronDown, ChevronUp } from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is epoxy flooring?",
      a: "Epoxy flooring is a durable, multi-part coating system applied to concrete surfaces. It provides a strong, protective layer that can improve the appearance and lifespan of the floor, often used in commercial and residential spaces."
    },
    {
      q: "What is polyaspartic coating?",
      a: "Polyaspartic coatings are a type of high-performance finishing system known for their durability and fast application properties. They are often chosen for projects requiring a tough, professional-grade finish."
    },
    {
      q: "What is urethane coating?",
      a: "Urethane (or polyurethane) coatings offer a highly protective layer for concrete surfaces. They are often used as a topcoat over other systems like epoxy to provide additional resistance and a specific finish."
    },
    {
      q: "How do I know which coating is right for my project?",
      a: "The right coating depends on your specific needs, the condition of your concrete, and the intended use of the space. We recommend contacting us to discuss your project so we can guide you toward the best solution."
    },
    {
      q: "How can I request a quote?",
      a: "You can request a quote by filling out the contact form on this page, or by calling us directly at +1 909-645-5325. We'll be happy to discuss your needs and provide an estimate."
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
              Let's Talk About <br />
              <span className="text-brand-orange">Your Concrete</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-brand-silver/80 max-w-2xl"
            >
              Have questions about epoxy, polyaspartic, urethane, or concrete coatings? Get in touch with Epoxy Intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-24 bg-brand-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/3"
            >
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <a
                  href="tel:+19096455325"
                  className="flex items-center gap-4 bg-brand-concrete/30 p-6 border border-white/5 hover:border-brand-orange/50 transition-colors group"
                >
                  <div className="bg-brand-charcoal p-3 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-silver/60 mb-1">Call Us</div>
                    <div className="text-lg font-bold text-white">+1 909-645-5325</div>
                  </div>
                </a>

                <a
                  href="mailto:jnichy@simiron.com"
                  className="flex items-center gap-4 bg-brand-concrete/30 p-6 border border-white/5 hover:border-brand-orange/50 transition-colors group"
                >
                  <div className="bg-brand-charcoal p-3 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-silver/60 mb-1">Email Us</div>
                    <div className="text-lg font-bold text-white break-all">jnichy@simiron.com</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/polyasparticus?igsh=Nzkya3BhcG9tcjB2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-brand-concrete/30 p-6 border border-white/5 hover:border-brand-orange/50 transition-colors group"
                >
                  <div className="bg-brand-charcoal p-3 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-silver/60 mb-1">Follow Us</div>
                    <div className="text-lg font-bold text-white">Epoxy Intelligence</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/3 bg-brand-concrete/20 border border-white/10 p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Request a Quote</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-silver">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-brand-charcoal border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-brand-silver">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-brand-charcoal border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-silver">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-brand-charcoal border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium text-brand-silver">Project Type</label>
                    <select
                      id="project"
                      className="w-full bg-brand-charcoal border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                    >
                      <option value="">Select a project type...</option>
                      <option value="epoxy-flooring">Epoxy Flooring</option>
                      <option value="epoxy-coating">Epoxy Coating</option>
                      <option value="polyaspartic">Polyaspartic</option>
                      <option value="urethane">Urethane</option>
                      <option value="concrete-coatings">Concrete Coatings</option>
                      <option value="not-sure">Not Sure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-silver">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-brand-charcoal border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 font-bold text-lg transition-colors w-full sm:w-auto"
                >
                  Request a Quote
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-brand-concrete border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-silver/70">
              Common questions about our concrete coating solutions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/10 bg-brand-charcoal overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold text-white">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-brand-orange shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-silver shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-brand-silver/80 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-brand-orange text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-charcoal mb-4">
              Let's Find the Right Coating for Your Project.
            </h2>
            <p className="text-xl font-medium text-brand-charcoal/80 mb-10">
              35 years of experience and a customer-first approach.
            </p>
            <a
              href="tel:+19096455325"
              className="bg-brand-charcoal hover:bg-brand-dark text-white px-10 py-5 font-bold text-xl transition-colors inline-flex items-center gap-3 shadow-xl"
            >
              <Phone className="w-6 h-6 text-brand-orange" />
              Call +1 909-645-5325
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
