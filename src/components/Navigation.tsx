import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/cmsData';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="CMS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span
                  className={`font-display text-lg font-semibold leading-tight transition-colors duration-300 ${
                    isScrolled ? 'text-cms-dark' : 'text-white'
                  }`}
                >
                  Centre Mohammed VI
                </span>
                <p
                  className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-cms-gray' : 'text-white/70'
                  }`}
                >
                  Microfinance Solidaire
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative font-body text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-cms-dark' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <button
                  className={`px-4 py-2 text-xs font-medium border transition-all duration-300 ${
                    isScrolled
                      ? 'border-cms-green text-cms-green hover:bg-cms-green hover:text-white'
                      : 'border-white/40 text-white hover:bg-white hover:text-cms-dark'
                  }`}
                >
                  Espace membre
                </button>
                <div
                  className={`flex items-center gap-1 text-xs font-medium ${
                    isScrolled ? 'text-cms-gray' : 'text-white/70'
                  }`}
                >
                  <span className="cursor-pointer hover:text-current">FR</span>
                  <span>|</span>
                  <span className="cursor-pointer hover:text-current">EN</span>
                  <span>|</span>
                  <span className="cursor-pointer hover:text-current">AR</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? 'text-cms-dark' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cms-dark transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-white font-display text-2xl font-medium hover:text-cms-terracotta transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <button className="w-full py-3 bg-cms-green text-white font-medium text-sm">
              Espace membre
            </button>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/70 text-sm">
              <span>FR</span>
              <span>|</span>
              <span>EN</span>
              <span>|</span>
              <span>AR</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
