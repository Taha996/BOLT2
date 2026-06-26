import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function TeamPage() {
  return (
    <PageLayout
      title="Notre équipe"
      subtitle="Les femmes et les hommes du Centre Mohammed VI de Soutien à la Microfinance Solidaire."
      breadcrumb={[{ label: 'Qui sommes-nous' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {site.team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="aspect-square overflow-hidden bg-cms-sand-light mb-4">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display text-4xl text-cms-green/30">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="font-display text-lg text-cms-dark leading-tight">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-cms-terracotta">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
