import { Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import RichContent from '../components/RichContent';
import { site, slugLabels } from '../data/site';

interface ContentPageProps {
  slug: string;
  /** Optional breadcrumb group shown before the page title. */
  group?: { label: string; to?: string };
}

export default function ContentPage({ slug, group }: ContentPageProps) {
  const page = site.pages[slug];
  if (!page) return <Navigate to="/" replace />;

  return (
    <PageLayout
      title={slugLabels[slug] ?? page.title}
      breadcrumb={group ? [group] : []}
      heroImage={page.images[0]}
    >
      <RichContent page={page} />
    </PageLayout>
  );
}
