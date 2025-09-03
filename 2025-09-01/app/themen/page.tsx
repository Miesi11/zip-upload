import { getTagsWithCount } from '../../lib/data';
import PageHeading from '../../components/PageHeading';
import TagLink from '../../components/TagLink';

export const dynamic = 'force-static';

export default function ThemenPage() {
  const tags = getTagsWithCount();
  return (
    <div>
      <PageHeading>Themen</PageHeading>
      <p className="mb-4">Entdecke Gstanzln nach ihren Themen. Wähle ein Stichwort, um alle passenden Gstanzln zu sehen.</p>
      <div className="flex flex-wrap">
        {tags.map(({ tag, count }) => (
          <TagLink key={tag} tag={tag} count={count} />
        ))}
      </div>
    </div>
  );
}