import { useEffect, useState } from "react";
import { deleteData, getData, postData } from "../api/axiosInstance";
import { Form } from "./Form";

export const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [edit, setEdit] = useState({});

  const handleGetData = async () => {
    try {
      let res = await getData();
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error) {
      console.log("Error in Getting Data");
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await deleteData(id);
      console.log(res.data);
      if (res.status === 200) {
        let filterData = posts.filter((post) => post.id !== id);
        setPosts(filterData);
      }
    } catch (error) {
      console.log("Error in Getting Data");
    }
  };

  const handlePost = async (post) => {
    try {
      const response = await postData(post);
      if (response.status === 201) {
        setPosts((prev) => [...prev, response.data]);
      }
    } catch (error) {
        console.log("Cannot Update Post");
    }
  };

  const handleEdit = (post) => {
    setEdit(post);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <section className="bg-black p-2">
      <section className="">
        <Form handlePost={handlePost} edit = {edit} data ={posts} setData = {setPosts} setEdit = {setEdit}/>
      </section>
      <section>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-3 list-inside marker:text-blue-500">
          {posts.map((post) => {
            let { id, title, body } = post;
            return (
              <li key={id} className="bg-[#111111] text-white p-5 border-l-1">
                <p>Title: {title}</p>
                <p>{body}</p>
                <div>
                  <button className="bg-green-500 px-5 m-2" onClick={() => handleEdit(post)}>Edit</button>
                  <button
                    className="bg-red-500 px-5 m-2"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </section>
  );
};
