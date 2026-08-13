import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../api/apiInstance";

export const PostPage = () => {
  const params = useParams();
  async function getIndPost(id) {
    try {
      const response = await getSinglePost(id);
      if(response.status === 200){
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", params.id],
    queryFn: () => getIndPost(params.id),
  });

  if(isPending) return <h1 className="text-white">Loading..... {console.log("Loading")}</h1>
  if(isError) return <h1 className="text-white">{error.message || "Something went wrong"}</h1>


  return <section className="bg-gray-800 w-full">
    <div className="h-full text-white max-w-3xl m-auto p-5">
        <p><span>ID:</span> {data.id}</p>
        <p><span>Title:</span> {data.title}</p>
        <p>{data.body}</p>
    </div>
  </section>;
};
