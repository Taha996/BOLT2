import { useState } from 'react';
import { Send, Briefcase } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const NIVEAUX = ['Niveau bac', 'Bac+1', 'Bac+2', 'Bac+3', 'Bac+4', 'Bac+5'];
const EXPERIENCE = ['1', '2', '3', '4', '5'];

export default function RecruitmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout
      title="Recrutement et stages"
      subtitle="Vous souhaitez rejoindre le CMS ? Déposez votre candidature spontanée."
      breadcrumb={[{ label: 'Communication' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="max-w-2xl">
          {submitted ? (
            <div className="bg-cms-green/5 border border-cms-green/20 p-8 text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cms-green/10 text-cms-green">
                <Briefcase size={24} />
              </span>
              <h2 className="font-display text-2xl text-cms-dark">
                Candidature envoyée
              </h2>
              <p className="mt-2 text-cms-gray">
                Merci pour votre intérêt. Notre équipe RH étudiera votre dossier
                et reviendra vers vous.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Nom complet" required>
                  <input type="text" required className={inputClass} />
                </Field>
                <Field label="Email" required>
                  <input type="email" required className={inputClass} />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Téléphone">
                  <input type="tel" className={inputClass} />
                </Field>
                <Field label="Poste souhaité">
                  <input
                    type="text"
                    placeholder="Candidature spontanée"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Niveau de formation">
                  <select className={inputClass}>
                    {NIVEAUX.map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Années d'expérience">
                  <select className={inputClass}>
                    {EXPERIENCE.map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="CV (PDF)">
                <input type="file" accept=".pdf,.doc,.docx" className={fileClass} />
              </Field>

              <Field label="Lettre de motivation (PDF)">
                <input type="file" accept=".pdf,.doc,.docx" className={fileClass} />
              </Field>

              <Field label="Message">
                <textarea rows={4} className={`${inputClass} resize-none`} />
              </Field>

              <button type="submit" className="btn-primary gap-2 justify-center w-full">
                <Send size={18} />
                Envoyer ma candidature
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

const inputClass =
  'w-full px-4 py-3 bg-cms-sand-light border border-cms-gray-light/50 text-cms-dark focus:border-cms-green focus:outline-none transition-colors';
const fileClass =
  'w-full text-sm text-cms-gray file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-cms-green file:text-white file:text-sm file:font-medium hover:file:bg-cms-green-dark file:cursor-pointer';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-cms-dark mb-2">
        {label}
        {required && <span className="text-cms-terracotta"> *</span>}
      </label>
      {children}
    </div>
  );
}
