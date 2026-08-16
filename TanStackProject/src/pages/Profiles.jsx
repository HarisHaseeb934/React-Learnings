import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { infinitePosts } from "../api/axiosInstance";
import { useInView } from "react-intersection-observer";

export const Profiles = () => {
    const {data, isLoading, isError, hasNextPage, fetchNextPage, error, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ["profiles"],
        queryFn: infinitePosts,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 10 ? allPages + 1: undefined;
        }
    });

    const {ref, inView} = useInView({
        threshold:1,
    })

    // function handleScroll(){
    //     const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

    //     if(bottom && hasNextPage) fetchNextPage();
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // },[hasNextPage])


    useEffect(() => {
        if(hasNextPage && inView) fetchNextPage()
    },[hasNextPage, inView])

    return <section className="bg-gray-900 w-full">
        <div className="text-white m-auto w-full max-w-6xl">
            {data?.pages.map(page => {
                return <ul className="grid grid-cols-1 md:grid-cols-2">{
                page.map(post => {
                    const {login, id, avatar_url} = post;
                    return(
                        <li key={id}>
                            <img src={avatar_url} alt="" width="250px"/>
                            <p>{login}</p>
                        </li>
                    )
                })}
                </ul>
            })}
        </div>
        {/* {isFetchingNextPage && <div className="text-white">Loading...</div>} */}

        <div ref={ref} className="text-white">{isFetchingNextPage ? "Loading..." : hasNextPage ? "Load More" : "No more Users"}</div>
    </section>
}