import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPosts } from "../api/axiosInstance";
import { Loader } from "../components/UI/Loader";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Posts = () => {
  const [pageNum, setPageNum] = useState(0);

  const queryClient = useQueryClient();
  const {
    data: posts,
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["posts", pageNum],
    queryFn: () => getPosts(pageNum),
  });

  const deleteMutate = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (response, id) => {
      queryClient.setQueryData(["posts", pageNum], (currElement) => {
        return currElement?.filter(post => post.id !== id)
      })
    }
  })

  if (isPending) return <Loader />;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="bg-gray-900 text-white w-full h-[calc(100dvh-136px)]">
      <div className="m-auto w-full max-w-6xl p-3">
        <ul className="grid grid-cols-1 gap-3">
          {posts?.map((post) => {
            const { id, title, body } = post;
            return (
              <li key={id} className="border-l p-3 bg-gray-700">
                <NavLink to={`/posts/${id}`}>
                  <p>
                    <span className="font-bold">Title: </span>
                    {title}
                  </p>
                  <p>{body}</p>
                </NavLink>
                <button className="bg-red-500 px-3 my-3" onClick={() => deleteMutate.mutate(id)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center gap-6 m-5">
          <button
            className="px-3 bg-green-600"
            onClick={() => setPageNum((prev) => prev - 3)}
            disabled={pageNum === 0 ? true : false}
          >
            Prev
          </button>
          <p className="">{pageNum / 3 + 1}</p>
          <button
            className="px-3 bg-green-600"
            onClick={() => setPageNum((prev) => prev + 3)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};
