"use client";

import { usePosts } from "@/hooks/usePosts";
import Link from "next/link";

export default function PostsPage() {
  const { data, isLoading, isError, error } = usePosts();

  if (isLoading) return <div className="text-center p-4">Loading posts...</div>;
  if (isError)
    return (
      <div className="text-center p-4 text-red-500">
        Error: {error?.message}
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Posts</h1>
      <Link
        href="/new-post"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block mb-4"
      >
        Create New Post
      </Link>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((post) => (
          <li key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-3">
              {post.body.substring(0, 100)}...
            </p>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
