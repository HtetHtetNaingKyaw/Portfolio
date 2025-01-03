import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchSinglePost } from "../apis/posts";

export const useGetPosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.documents.length < 2) {
        return undefined;
      }

      return pages.length;
    },
  });
};

export const useSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["singlePost", id],
    queryFn: () => fetchSinglePost(id),
    enabled: !!id,
  });
};
