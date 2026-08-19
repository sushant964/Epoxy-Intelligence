import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src="https://res.cloudinary.com/ermw5sr0/image/upload/v1787165495/765324114_17922661503404133_2893534859372188815_n_1.jpg" alt="Epoxy Intelligence Logo" className="h-10 w-auto object-contain rounded-sm" />
              <span className="text-xl font-bold tracking-tight text-white uppercase group-hover:text-brand-orange transition-colors">
                Epoxy Intelligence
              </span>
            </Link>
            <p className="text-brand-silver/70 leading-relaxed mb-8 max-w-sm">
              "35 Years of Experience. A Smarter Approach to Concrete."
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/polyasparticus?igsh=Nzkya3BhcG9tcjB2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-concrete hover:bg-brand-orange transition-colors flex items-center justify-center text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="text-brand-silver/70 hover:text-white transition-colors flex items-center gap-2 group w-max">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-orange" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-brand-silver/70 hover:text-white transition-colors flex items-center gap-2 group w-max">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-orange" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-brand-silver/70 hover:text-white transition-colors flex items-center gap-2 group w-max">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-orange" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-silver/70 hover:text-white transition-colors flex items-center gap-2 group w-max">
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-orange" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Services
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="text-brand-silver/70">Concrete Coatings</li>
              <li className="text-brand-silver/70">Epoxy Flooring</li>
              <li className="text-brand-silver/70">Polyaspartic</li>
              <li className="text-brand-silver/70">Urethane</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+19096455325" className="text-brand-silver/70 hover:text-white transition-colors flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>+1 909-645-5325</span>
                </a>
              </li>
              <li>
                <a href="mailto:jnichy@simiron.com" className="text-brand-silver/70 hover:text-white transition-colors flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>jnichy@simiron.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-silver/50">
          <p>© 2026 Epoxy Intelligence. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
