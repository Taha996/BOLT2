import { Calendar } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function AgendaPage() {
  return (
    <PageLayout
      title="Agenda"
      subtitle="Les rendez-vous et événements à venir du secteur de la microfinance."
      breadcrumb={[{ label: 'Outils de suivi' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="space-y-10 max-w-4xl">
          {site.agenda.map((event) => (
            <article
              key={event.slug}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-cms-sand-light overflow-hidden"
            >
              {event.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 md:py-8 md:pr-8">
                <span className="inline-flex items-center gap-1 text-xs text-cms-terracotta font-medium uppercase tracking-wide">
                  <Calendar size={13} />
                  Agenda
                </span>
                <h2 className="mt-3 font-display text-2xl text-cms-dark leading-tight">
                  {event.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {event.body
                    .filter((p) => p !== event.title)
                    .map((p, i) => (
                      <p key={i} className="text-sm text-cms-gray leading-relaxed">
                        {p}
                      </p>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
