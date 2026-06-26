import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function PartnersPage() {
  return (
    <PageLayout
      title="Partenaires"
      subtitle="Le CMS s'appuie sur un réseau de partenaires nationaux et internationaux pour amplifier son impact."
      breadcrumb={[{ label: 'Qui sommes-nous' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {site.partnerLogos.map((logo) => (
            <div
              key={logo}
              className="group p-6 bg-cms-sand-light hover:bg-white border border-transparent hover:border-cms-gray-light/50 transition-all duration-300 flex items-center justify-center aspect-[3/2]"
            >
              <img
                src={logo}
                alt="Partenaire"
                loading="lazy"
                className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
