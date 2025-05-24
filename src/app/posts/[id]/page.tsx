"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PostDetailPage() {
  const params = useParams();
  const postId = params.id as string;

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: queryKeys.posts.detail(postId),
    queryFn: () => fetchPostById(postId),
    enabled: !!postId,
  });

  if (isLoading)
    return <div className="text-center p-4">Loading post details...</div>;
  if (isError)
    return (
      <div className="text-center p-4 text-red-500">
        Error: {error?.message}
      </div>
    );
  if (!post) return <div className="text-center p-4">Post not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <Link
        href="/posts"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Posts
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>
      <p className="text-sm text-gray-500">User ID: {post.userId}</p>
    </div>
  );
}
