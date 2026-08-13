import {
  keepPreviousData,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, getPost, updatePost } from "../api/apiInstance";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRq = () => {
  const [pageNum, setPageNum] = useState(0);

  const querClient = useQueryClient();

  async function getPostData(pageNum) {
    const response = await getPost(pageNum);
    return response.data;
  }

  function handlePrev() {
    setPageNum((prev) => prev - 3);
  }
  function handleNext() {
    setPageNum((prev) => prev + 3);
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNum],
    queryFn: () => getPostData(pageNum),
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: (response, id) => {
      querClient.setQueryData(["posts", pageNum], (currEle) => {
        return currEle?.filter((post) => post.id !== id);
      })
    } 
  })

  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (data, id) => {
      querClient.setQueryData(["posts", pageNum], (postsOnPage) =>{
        // return postsOnPage?.map(post => post.id === id ? data.data : post)
        return postsOnPage?.map(post => post.id === id ? {...post, ...data.data} : post)
        // return postsOnPage?.map(post => post.id === id ? {...post, title:data.data.title} : post)
      })
    }
  })

  return (
    <section className="bg-gray-800 h-dvh">
      <ul className="w-full max-w-7xl m-auto grid grid-cols-1 gap-2">
        {data &&
          data.map((post) => {
            const { id, title, body } = post;
            return (
              <li
                key={id}
                className="bg-gray-600 text-white border-l-1 border-white p-3"
              >
                <NavLink to={`/rq/${id}`}>
                  <p>
                    <span>Title:</span> {title}
                  </p>
                  <p>{body}</p>
                </NavLink>
                <button onClick={() => deleteMutation.mutate(id)}>
                  Delete
                </button>
                <button onClick={() => updateMutation.mutate(id)}>
                  Update
                </button>
              </li>
            );
          })}
      </ul>

      <div className="flex text-white p-5 gap-5">
        <button
          className="bg-green-500 p-2"
          onClick={handlePrev}
          disabled={pageNum === 0 ? true : false}
        >
          Prev
        </button>
        <p className=" p-2">{pageNum / 3 + 1}</p>
        <button className="bg-green-500 p-2" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
};
