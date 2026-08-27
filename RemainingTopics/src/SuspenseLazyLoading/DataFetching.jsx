import { useEffect, useState } from "react"

const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if(!response.ok) throw new Error("data didnot find");
            const data = await response.json();
            setPosts(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <section>
            <ul>
                {posts.map(post => {
                    const {id, title, body} = post;
                    return(
                        <li key={id}>
                            <p>Title: {title}</p>
                            <p>{body}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default DataFetching;