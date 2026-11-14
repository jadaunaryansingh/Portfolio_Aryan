import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes } from "@/lib/routes";

// Every newspaper page is a real, statically generated URL:
// /, /about, /experience, /projects, /sih-hackathon, /research,
// /certifications, /skills, /git-dispatch, /blogs, /contact
// The flip-page UI itself lives in <NewspaperApp /> (rendered by app/layout.tsx),
// so navigating between routes keeps the page-flip animation and loader state.

export const dynamicParams = false;

type Props = { params: Promise<{ slug?: string[] }> };

export function generateStaticParams() {
  return routes.map((r) => ({ slug: r.slug ? [r.slug] : [] }));
}

function findRoute(slug?: string[]) {
  const key = slug?.join("/") ?? "";
  return routes.find((r) => r.slug === key);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = findRoute((await params).slug);
  if (!route) return {};
  return {
    title: route.title,
    alternates: { canonical: route.path },
    openGraph: { title: route.title, url: route.path, type: "website" },
  };
}

export default async function Page({ params }: Props) {
  if (!findRoute((await params).slug)) notFound();
  return null;
}
