import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";
import { Post } from "@/types";

export function usePosts() {
  return useQuery<Post[], Error>({
    queryKey: queryKeys.posts.all(),
    queryFn: fetchPosts,
  });
}
