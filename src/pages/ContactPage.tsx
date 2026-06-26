import { useState } from 'react';
import { MapPin, Phone, Mail, Printer, Send } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { contactInfo } from '../data/nav';

export default function ContactPage() {
  const contact = contactInfo;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Contact"
      subtitle="Nous sommes à votre écoute."
      breadcrumb={[{ label: 'Contact' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info + map */}
          <div>
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
              <InfoRow icon={<MapPin />} title="Adresse">
                {contact.address}
              </InfoRow>
              <InfoRow icon={<Phone />} title="Téléphone">
                {contact.tel}
              </InfoRow>
              <InfoRow icon={<Printer />} title="Fax">
                {contact.fax}
              </InfoRow>
              <InfoRow icon={<Mail />} title="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-cms-green transition-colors"
                >
                  {contact.email}
                </a>
              </InfoRow>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-cms-green/5 border border-cms-green/20 p-8 text-center h-full flex flex-col justify-center">
                <h2 className="font-display text-2xl text-cms-dark">
                  Message envoyé
                </h2>
                <p className="mt-2 text-cms-gray">
                  Merci pour votre message. Nous vous contacterons bientôt.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-cms-dark mb-2">
                    Nom complet
                  </label>
                  <input type="text" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cms-dark mb-2">
                    Email
                  </label>
                  <input type="email" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cms-dark mb-2">
                    Sujet
                  </label>
                  <input type="text" required className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cms-dark mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button type="submit" className="btn-primary gap-2 justify-center w-full">
                  <Send size={18} />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

const inputClass =
  'w-full px-4 py-3 bg-cms-sand-light border border-cms-gray-light/50 text-cms-dark focus:border-cms-green focus:outline-none transition-colors';

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-cms-sand flex items-center justify-center flex-shrink-0 text-cms-green">
        {icon}
      </div>
      <div>
        <h4 className="font-display text-lg text-cms-dark">{title}</h4>
        <p className="mt-1 text-cms-gray text-sm">{children}</p>
      </div>
    </div>
  );
}
