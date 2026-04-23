import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const docsRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

function formatTitle(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const frontmatterTitle = content.match(/^---[\s\S]*?\ntitle:\s*['"]?(.+?)['"]?\s*\n[\s\S]*?---/);
  const firstHeading = content.match(/^#\s+(.+)$/m);

  if (frontmatterTitle?.[1]) return frontmatterTitle[1].trim();
  if (firstHeading?.[1]) return firstHeading[1].trim();

  return basename(filePath, '.md')
    .replace(/^\d+[-_]/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getSidebarItems(relativeDir) {
  const dir = join(docsRoot, relativeDir);

  if (!existsSync(dir)) return [];

  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'index.md')
    .sort((a, b) => a.localeCompare(b, 'zh-CN', { numeric: true }))
    .map((fileName) => {
      const filePath = join(dir, fileName);
      const slug = fileName.replace(/\.md$/, '');

      return {
        text: formatTitle(filePath),
        link: `/${relativeDir}/${slug}`
      };
    });
}
