'use client';

import { use } from "react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Promise<Post[]>;
}

export default function Posts({ posts }: PostsProps) {
  const allPosts = use(posts);
    
    return (
      <ul className="space-y-4">
        {allPosts.map((post) => (
          <li key={post.id} className="p-4 max-w-2xl mx-auto border-b border-gray-200">
            <Link 
              href={`/blog/${post.id}`}
              className="hover:text-blue-500 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-2">{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
}