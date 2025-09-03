import fs from 'fs/promises';
import path from 'path';

async function build() {
  const dataPath = path.join(process.cwd(), 'data', 'gstanzln.json');
  const json = JSON.parse(await fs.readFile(dataPath, 'utf-8'));
  const index = json.map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    region: entry.region,
    mood: entry.mood,
    tags: entry.tags.join(' '),
    lyrics: entry.lyrics.join(' '),
    dialect: entry.dialect,
  }));
  const outDir = path.join(process.cwd(), 'public');
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'search-index.json'), JSON.stringify(index, null, 2));
  console.log('Search index built with', index.length, 'entries');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});