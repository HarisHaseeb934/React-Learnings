import { useEffect, useState } from "react";
import { getPosts } from "../components/API/apiInstance";
import { Loader } from "../components/UI/Loader";

export const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  async function handleGetPost() {
    try {
      const response = await getPosts();
      if (response.status === 200) {
        setLoading(false);
        setPosts(response.data);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetPost();
  }, []);

if(isLoading) return <Loader/>

if(isError) return <p>Error : {error.message || "Something went wrong"}</p>


  return (
    <section className="w-full bg-gray-800 text-white">
      <div className="w-full max-w-5xl m-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto">
          {posts.map((post) => {
            let { id, title, body } = post;
            return (
              <li
                key={id}
                className="border-l-1 border-white p-3 m-2 bg-gray-600"
              >
                <p>
                  <span className="font-bold text-gray-200">Title:</span>{" "}
                  {title}
                </p>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
