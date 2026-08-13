import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../components/API/apiInstance";
import { Loader } from "../components/UI/Loader";

export const FetchRQ = () => {
  async function handleGetPosts() {
    try {
      const response = await getPosts();
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  let { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: handleGetPosts,
    // staleTime: 5000,

    // refetchInterval: 1000,
    // refetchIntervalInBackground: true,
  });

  if (isLoading) return <Loader />;

  if (isError) return <p>Error : {error.message || "Something went wrong"}</p>;

  return (
    <section className="w-full bg-gray-800 text-white">
      <div className="w-full max-w-5xl m-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto">
          {data?.map((post) => {
            let { id, title, body } = post;
            return (
              <li
                key={id}
                className="border-l-1 border-white p-3 m-2 bg-gray-600"
              >
                <p className="font-bold text-gray-200">Title: {title}</p>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
