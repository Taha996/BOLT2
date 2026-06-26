import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { site } from '../data/site';

export default function NewsListPage() {
  return (
    <PageLayout
      title="Actualités"
      subtitle="Toute l'actualité du Centre Mohammed VI de Soutien à la Microfinance Solidaire."
      breadcrumb={[{ label: 'Communication' }]}
    >
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {site.news.map((article) => (
            <Link
              key={article.slug}
              to={`/actualites/${article.slug}`}
              className="group flex flex-col bg-white border border-cms-gray-light/40 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden bg-cms-sand-light">
                {article.featuredImage && (
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="flex items-center gap-1 text-xs text-cms-gray">
                  <Calendar size={13} />
                  {article.date}
                </span>
                <h3 className="mt-3 font-display text-lg text-cms-dark group-hover:text-cms-green transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-cms-gray leading-relaxed line-clamp-3 flex-1">
                  {article.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-cms-green font-medium text-sm group-hover:gap-3 transition-all">
                  Lire l'article
                  <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
