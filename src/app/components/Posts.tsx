"use client";

import { useState } from "react";
import Link from "next/link";
import { deletePost, updatePost } from "../lib/action";

interface Post {
  _id: string;
  title: string;
  content: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li
          key={post._id}
          className="p-4 max-w-2xl mx-auto border-b border-gray-200"
        >
          {editingPostId === post._id ? (
            <form
              action={(formData) => updatePost(post._id, formData)}
              className="space-y-2"
            >
              <input
                name="title"
                defaultValue={post.title}
                className="w-full border px-2 py-1"
              />
              <textarea
                name="content"
                defaultValue={post.content}
                className="w-full border px-2 py-1"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                  onClick={() => setEditingPostId(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <Link
                href={`/blog/${post._id}`}
                className="hover:text-blue-500 transition-colors"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-2">
                  {post.content}
                </p>
              </Link>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => setEditingPostId(post._id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
                <button
                  onClick={async () => {
                    const confirmDelete = window.confirm(
                      "Are you sure you want to delete this post?"
                    );
                    if (confirmDelete) {
                      await deletePost(post._id);
                    }
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
