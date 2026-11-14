// Single source of truth for the newspaper's page routes.
// The order here MUST match the order of the `pages` array in components/NewspaperApp.tsx.

export interface PageRoute {
  slug: string; // "" = home
  path: string;
  title: string;
}

const site = "Aryan Singh Jadaun | The Developer Daily";

export const routes: PageRoute[] = [
  { slug: "", path: "/", title: "The Developer Daily — Aryan Singh Jadaun | AI Engineer & Backend Developer" },
  { slug: "about", path: "/about", title: `About Me | ${site}` },
  { slug: "experience", path: "/experience", title: `Experience | ${site}` },
  { slug: "projects", path: "/projects", title: `Projects | ${site}` },
  { slug: "sih-hackathon", path: "/sih-hackathon", title: `SIH Hackathon 2026 | ${site}` },
  { slug: "research", path: "/research", title: `Research Paper | ${site}` },
  { slug: "certifications", path: "/certifications", title: `Certifications | ${site}` },
  { slug: "skills", path: "/skills", title: `Skills | ${site}` },
  { slug: "git-dispatch", path: "/git-dispatch", title: `Git Dispatch | ${site}` },
  { slug: "blogs", path: "/blogs", title: `Blogs | ${site}` },
  { slug: "contact", path: "/contact", title: `Contact | ${site}` },
];

/** Index of the page for a URL pathname, or -1 if the path is not a page route. */
export function getPageIndex(pathname: string | null): number {
  if (!pathname) return 0;
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routes.findIndex((r) => r.path === clean);
}
