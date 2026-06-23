import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-info',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.contact-form',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Merci pour votre message. Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 md:py-32 bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-cms-terracotta font-body text-sm font-medium tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-4 font-display text-section-title text-cms-dark">
            Nous sommes à votre écoute
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="contact-info">
           <div className="aspect-video bg-cms-sand-light overflow-hidden mb-8">
  <iframe
    title="Carte"
    src="https://www.google.com/maps?q=33.6072657,-7.5211769&z=15&output=embed"
    className="w-full h-full"
    loading="lazy"
    style={{ border: 0 }}
  />
</div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cms-sand flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cms-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-cms-dark">Adresse</h4>
                  <p className="mt-1 text-cms-gray text-sm">
                    Centre Mohammed VI de Soutien à la Microfinance Solidaire<br />
                    Avenue Mohammed VI, Rabat, Maroc
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cms-sand flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cms-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-cms-dark">Téléphone</h4>
                  <p className="mt-1 text-cms-gray text-sm">
                    +212 5XX XX XX XX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cms-sand flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cms-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-cms-dark">Email</h4>
                  <p className="mt-1 text-cms-gray text-sm">
                    contact@cm6-microfinance.ma
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cms-sand flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-cms-green" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-cms-dark">Horaires</h4>
                  <p className="mt-1 text-cms-gray text-sm">
                    Lundi - Vendredi : 8h30 - 16h30
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cms-dark mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-cms-sand-light border border-cms-gray-light/50 text-cms-dark focus:border-cms-green focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cms-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-cms-sand-light border border-cms-gray-light/50 text-cms-dark focus:border-cms-green focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-cms-dark mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-cms-sand-light border border-cms-gray-light/50 text-cms-dark focus:border-cms-green focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cms-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-cms-sand-light border border-cms-gray-light/50 text-cms-dark focus:border-cms-green focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary gap-2 justify-center"
              >
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
