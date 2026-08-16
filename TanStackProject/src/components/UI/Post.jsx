import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/axiosInstance";
import { Loader } from "./Loader";

export const Post = () => {
  const { id } = useParams();

  const { data: post, isError, isPending, error } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  if (isPending) return <Loader />;
  if (isError) return <p>{error.message}</p>;

  return <section className="h-[calc(100dvh-136px)] flex justify-center items-center bg-gray-900 text-white p-5">
    <div className="w-full max-w-xl">
        <p className="text-2xl"><span className="font-bold">Title: </span>{post.title}</p>
        <p>{post.body}</p>
    </div>
  </section>;
};
