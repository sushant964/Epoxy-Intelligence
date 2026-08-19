import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-brand-charcoal/95 backdrop-blur-md py-3 shadow-lg' : 'bg-brand-charcoal py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="https://res.cloudinary.com/ermw5sr0/image/upload/v1787165495/765324114_17922661503404133_2893534859372188815_n_1.jpg" alt="Epoxy Intelligence Logo" className="h-10 w-auto object-contain rounded-sm" />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase group-hover:text-brand-orange transition-colors">
            Epoxy Intelligence
          </span>
        </Link>

        {/* Nav Links Zone (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-white ${
                location.pathname === link.path ? 'text-white' : 'text-brand-silver/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+19096455325"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-brand-orange transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="whitespace-nowrap">+1 909-645-5325</span>
          </a>
          <Link
            to="/contact"
            className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-charcoal border-b border-white/5 shadow-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <a
              href="tel:+19096455325"
              className="flex items-center gap-3 text-white py-2 font-medium"
            >
              <Phone className="w-5 h-5 text-brand-orange" />
              +1 909-645-5325
            </a>
            <Link
              to="/contact"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-3 text-center font-semibold mt-2"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
