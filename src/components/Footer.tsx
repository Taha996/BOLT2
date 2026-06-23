import { Facebook, Twitter, Linkedin, Youtube, Mail, ArrowRight } from 'lucide-react';

const footerLinks = {
  'Qui sommes-nous': [
    'Présentation',
    'Infrastructure',
    'Conseil d\'administration',
    'Organigramme',
    'Notre équipe',
  ],
  'Activités': [
    'Formation',
    'Appui à la micro-entreprise',
    'Observatoire',
    'E-learning',
  ],
  'Observatoire': [
    'Cartographie',
    'Tendances',
    'Factsheets',
    'Études',
  ],
  'Publications': [
    'Rapports',
    'Études',
    'Documentation',
    'Publications',
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cms-dark text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="section-padding py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl">
                Restez informé de nos actualités
              </h3>
              <p className="mt-3 text-white/60 text-sm">
                Recevez nos publications, événements et actualités du secteur de la microfinance.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-cms-terracotta focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-cms-terracotta text-white font-medium text-sm hover:bg-cms-terracotta-light transition-colors flex items-center gap-2">
                <span className="hidden sm:inline">S'inscrire</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="CMS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg font-semibold leading-tight">
                  Centre Mohammed VI
                </span>
                <p className="text-[10px] tracking-widest uppercase text-white/50">
                  Microfinance Solidaire
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Formation, accompagnement, observatoire et promotion de la microfinance solidaire au Maroc depuis 2007.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-cms-terracotta transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-cms-terracotta transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-cms-terracotta transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-cms-terracotta transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-medium mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <Mail size={14} className="mt-1 flex-shrink-0" />
                <span>contact@cm6-microfinance.ma</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
              <span className="cursor-pointer hover:text-white transition-colors">FR</span>
              <span>|</span>
              <span className="cursor-pointer hover:text-white transition-colors">EN</span>
              <span>|</span>
              <span className="cursor-pointer hover:text-white transition-colors">AR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2024 Centre Mohammed VI de Soutien à la Microfinance Solidaire. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-xs">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
