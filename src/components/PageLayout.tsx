import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  /** Breadcrumb trail after "Accueil" (excluding the current page title). */
  breadcrumb?: { label: string; to?: string }[];
  heroImage?: string;
  children: ReactNode;
}

export default function PageLayout({
  title,
  subtitle,
  breadcrumb = [],
  heroImage,
  children,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation solid />

      <header className="relative bg-cms-green text-white overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-cms-green/80" />
          </div>
        )}
        <div className="section-padding relative z-10 pt-32 lg:pt-40 pb-14 lg:pb-16">
          <nav className="flex items-center flex-wrap gap-1 text-xs text-white/70 mb-5">
            <Link to="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            {breadcrumb.map((b) => (
              <span key={b.label} className="flex items-center gap-1">
                <ChevronRight size={12} />
                {b.to ? (
                  <Link to={b.to} className="hover:text-white transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span>{b.label}</span>
                )}
              </span>
            ))}
            <span className="flex items-center gap-1">
              <ChevronRight size={12} />
              <span className="text-white">{title}</span>
            </span>
          </nav>
          <h1 className="font-display text-section-title leading-tight max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/80 text-body-lg max-w-2xl font-light">
              {subtitle}
            </p>
          )}
        </div>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
}
