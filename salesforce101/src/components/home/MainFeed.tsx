"use client";
import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { useMemo, useState } from 'react';
import { FiClock, FiTrendingUp, FiStar } from 'react-icons/fi';

export function MainFeed({ posts }: { posts: Post[] }) {
  if (!posts?.length) {
    return (
      <div className="py-10 text-center text-gray-500 dark:text-gray-400">No posts found.</div>
    );
  }

  const [featured, ...rest] = posts;
  const rightStack = rest.slice(0, 2);
  const belowGrid = rest.slice(2, 8);

  // Modern segmented control tabs config
  const tabs = useMemo(
    () => [
      { label: 'Latest', icon: FiClock },
      { label: 'Most Popular', icon: FiTrendingUp },
      { label: "Editors' Picks", icon: FiStar },
    ],
    []
  );
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-12">
      {/* Tabs – modern segmented control */}
      <div className="relative w-full max-w-xl">
        <div className="relative grid grid-cols-3 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white/60 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm">
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 rounded-2xl bg-gradient-to-r from-salesforce-indigo to-salesforce-blue shadow-lg [box-shadow:0_6px_28px_rgba(3,103,255,.25)] transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${active * 100}%)` }}
            aria-hidden
          />
          {tabs.map((t, i) => {
            const Icon = t.icon;
            const isActive = i === active;
            return (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={
                  'relative z-10 flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors duration-200 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-salesforce-indigo/50 dark:focus-visible:ring-offset-gray-900 ' +
                  (isActive ? 'text-black' : 'text-black hover:text-black')
                }
                aria-pressed={isActive}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={16} />
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Top featured row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {/* Big left feature */}
        <article className="md:col-span-2 relative p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-900 overflow-hidden transition-all hover:shadow-lg hover:-translate-y-0.5">
          <div className="absolute left-0 top-10 h-24 w-1 bg-salesforce-indigo" />
          <Link href={`/blog/${featured.slug}`} className="block">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
              {featured.title}
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              By {featured.author} • {new Date(featured.date).toLocaleDateString()}
            </div>
            <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-salesforce-indigo/25 to-salesforce-blue/25" />
          </Link>
        </article>

        {/* Right stacked cards */}
        <div className="flex flex-col gap-8">
          {rightStack.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 transition-all hover:shadow-lg hover:-translate-y-0.5 ring-1 ring-transparent hover:ring-salesforce-indigo/20">
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-salesforce-blue/25 to-salesforce-indigo/25" />
                <div className="p-4">
                  <span className="inline-block text-xs font-semibold text-white bg-salesforce-indigo px-2 py-1 rounded mb-2">{p.tags?.[0] || 'Admins'}</span>
                  <h3 className="font-bold text-xl leading-snug group-hover:underline text-gray-900 dark:text-white">{p.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-gray-800" />

      {/* Below grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {belowGrid.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 transition-all hover:shadow-lg hover:-translate-y-0.5 ring-1 ring-transparent hover:ring-salesforce-indigo/20">
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-salesforce-indigo/20 to-salesforce-blue/20" />
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 text-salesforce-indigo font-semibold">→</span>
                  <span>{new Date(p.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{p.author}</span>
                </div>
                <h4 className="text-2xl font-extrabold leading-snug group-hover:underline text-gray-900 dark:text-white">{p.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{p.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainFeed;
