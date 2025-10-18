import 'server-only';
import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/posts';

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (err) {
    console.error('Failed to load posts', err);
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 });
  }
}
