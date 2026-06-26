import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  navigation,
  slugLabels,
  navGroupLabels,
  routeForSlug,
} from '../data/nav';

interface NavigationProps {
  /** Force the opaque style (used on inner pages that have no dark hero). */
  solid?: boolean;
}

export default function Navigation({ solid = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  const opaque = solid || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const groups = navigation;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          opaque ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
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
                    opaque ? 'text-cms-dark' : 'text-white'
                  }`}
                >
                  Centre Mohammed VI
                </span>
                <p
                  className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                    opaque ? 'text-cms-gray' : 'text-white/70'
                  }`}
                >
                  Microfinance Solidaire
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7">
              {groups.map((group) => {
                const label = navGroupLabels[group.label] ?? group.label;
                // Single-child groups link directly.
                if (group.children.length === 1) {
                  return (
                    <Link
                      key={group.label}
                      to={routeForSlug(group.children[0])}
                      className={`font-body text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                        opaque ? 'text-cms-dark' : 'text-white'
                      }`}
                    >
                      {label}
                    </Link>
                  );
                }
                return (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(group.label)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <button
                      className={`flex items-center gap-1 font-body text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                        opaque ? 'text-cms-dark' : 'text-white'
                      }`}
                    >
                      {label}
                      <ChevronDown size={14} />
                    </button>
                    {openGroup === group.label && (
                      <div className="absolute left-0 top-full pt-3">
                        <div className="min-w-[240px] bg-white shadow-xl border-t-2 border-cms-green py-2">
                          {group.children.map((slug) => (
                            <Link
                              key={slug}
                              to={routeForSlug(slug)}
                              className="block px-5 py-2.5 text-sm text-cms-dark hover:bg-cms-sand-light hover:text-cms-green transition-colors"
                            >
                              {slugLabels[slug] ?? slug}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <div
                className={`hidden md:flex items-center gap-1 text-xs font-medium ${
                  opaque ? 'text-cms-gray' : 'text-white/70'
                }`}
              >
                <span className="cursor-pointer hover:text-current">FR</span>
                <span>|</span>
                <span className="cursor-pointer hover:text-current">EN</span>
                <span>|</span>
                <span className="cursor-pointer hover:text-current">AR</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
                className={`lg:hidden p-2 transition-colors ${
                  opaque ? 'text-cms-dark' : 'text-white'
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
        className={`fixed inset-0 z-40 bg-cms-dark overflow-y-auto transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-8 pb-12">
          <div className="flex flex-col gap-2">
            {groups.map((group) => {
              const label = navGroupLabels[group.label] ?? group.label;
              if (group.children.length === 1) {
                return (
                  <Link
                    key={group.label}
                    to={routeForSlug(group.children[0])}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-white font-display text-xl font-medium py-3 border-b border-white/10"
                  >
                    {label}
                  </Link>
                );
              }
              const expanded = openMobileGroup === group.label;
              return (
                <div key={group.label} className="border-b border-white/10">
                  <button
                    onClick={() =>
                      setOpenMobileGroup(expanded ? null : group.label)
                    }
                    className="w-full flex items-center justify-between text-left text-white font-display text-xl font-medium py-3"
                  >
                    {label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expanded && (
                    <div className="pb-3 flex flex-col gap-1">
                      {group.children.map((slug) => (
                        <Link
                          key={slug}
                          to={routeForSlug(slug)}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-white/70 text-base py-2 pl-2 hover:text-cms-terracotta transition-colors"
                        >
                          {slugLabels[slug] ?? slug}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-4 mt-8 text-white/70 text-sm">
            <span>FR</span>
            <span>|</span>
            <span>EN</span>
            <span>|</span>
            <span>AR</span>
          </div>
        </div>
      </div>
    </>
  );
}
