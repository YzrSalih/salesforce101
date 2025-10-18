'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
};

type EventItem = { title: string; date: string; href?: string };

function SidebarInner() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((r) => r.json())
      .then((data: Post[]) => setPosts(data.slice(0, 6)))
      .catch(() => setPosts([]));
  }, []);

  const trending = posts.slice(0, 5);
  const events: EventItem[] = [
    { title: 'DevOps Dreamin’ London • CFP', date: 'Nov 20, 2025', href: '#' },
    { title: 'TrailblazerDX 2026', date: 'Mar 10, 2026', href: '#' },
  ];

  return (
    <aside className="space-y-10">
      {/* Ad top */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-0 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="h-48 w-full bg-gradient-to-br from-salesforce-indigo/20 to-salesforce-blue/20 grid place-items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">300×250 Ad</span>
        </div>
      </div>

      {/* What's trending */}
      <section>
        <hr className="border-gray-200 dark:border-gray-800 mb-6" />
        <h3 className="text-3xl font-extrabold tracking-widest uppercase text-center mb-6">
          WHAT'S TRENDING
        </h3>
        <hr className="border-gray-200 dark:border-gray-800 mb-8" />
        <div className="space-y-3">
          {trending.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex items-center gap-3 rounded-lg border border-salesforce-indigo/40 bg-salesforce-indigo/5 px-3 py-2 hover:border-salesforce-indigo/70 hover:bg-salesforce-indigo/10 transition-colors"
            >
              <span className="text-salesforce-indigo">→</span>
              <h4 className="text-base font-semibold leading-snug text-salesforce-indigo group-hover:underline">
                {p.title}
              </h4>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad middle */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-0 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="h-60 w-full bg-gradient-to-br from-salesforce-blue/20 to-salesforce-indigo/20 grid place-items-center">
          <div className="px-6 text-center">
            <div className="text-xs font-semibold text-salesforce-blue mb-2">BACKUP & ARCHIVING</div>
            <div className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Release with
              <span className="block text-yellow-500">confidence</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Build backups into your pipeline so every release has a safety net
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming events */}
      <section>
        <h3 className="text-2xl font-extrabold tracking-wide mb-6">UPCOMING EVENTS</h3>
        <hr className="border-gray-200 dark:border-gray-800 mb-6" />
        <ul className="space-y-3">
          {events.map((e, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg border border-salesforce-indigo/40 bg-salesforce-indigo/5 px-3 py-2"
            >
              <span className="mt-1 text-salesforce-indigo">→</span>
              <div>
                <div className="font-semibold leading-snug text-salesforce-indigo">{e.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{e.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default function Sidebar() {
  return <SidebarInner />;
}
