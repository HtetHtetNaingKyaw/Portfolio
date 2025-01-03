import { useMutation, useQuery } from "@tanstack/react-query";
import keys from "../query-key";
import { checkSession, createPost, ownerLogin } from "../apis/owner";

export const useGetUserSession = () => {
  return useQuery({
    queryKey: [keys.getUserSession],
    queryFn: () => checkSession(),
    retry: false,
  });
};

export const useUserLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      ownerLogin(email, password),
  });
};

export const usePostCreate = () => {
  return useMutation({
    mutationFn: ({
      title,
      description,
      projectLink,
      deployLink,
      hashTag,
    }: {
      title: string;
      description: string;
      projectLink: string;
      deployLink: string;
      hashTag: string;
    }) => createPost(title, description, projectLink, deployLink, hashTag),
  });
};
