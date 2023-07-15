import glob from 'fast-glob';
import * as path from 'path';

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/press/press-releases/${articleFilename}`
  );
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  };
}

export async function getAllPressReleases() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'pages/press/press-releases'),
  });

  let articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date));
}