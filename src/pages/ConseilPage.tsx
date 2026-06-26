import { Users } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function ConseilPage() {
  const { roles, names } = site.conseil;

  return (
    <PageLayout
      title="Conseil d'administration"
      subtitle="Le Conseil d'administration réunit les principaux acteurs du secteur de la microfinance au Maroc."
      breadcrumb={[{ label: 'Qui sommes-nous' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {roles.map((role, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-cms-sand-light border-l-2 border-cms-green"
            >
              <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cms-green/10 text-cms-green">
                <Users size={18} />
              </span>
              <div>
                {names[i] && (
                  <h3 className="font-display text-lg text-cms-dark leading-tight">
                    {names[i]}
                  </h3>
                )}
                <p className="text-sm text-cms-gray mt-1">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
