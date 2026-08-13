import { useEffect } from "react";
import { getApiData } from "../api/axiosInstance";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export const Infinite = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    isError,
    error,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getApiData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages + 1 : undefined;
    },
    initialPageParam: 1,
  });

  //   function handleScroll() {
  //     const bottom =
  //       window.innerHeight + window.scrollY >=
  //       document.documentElement.scrollHeight - 1;

  //     if (bottom && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   }

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    if (hasNextPage && inView) fetchNextPage();
  }, [hasNextPage, inView]);

  if (isPending) return <h1>Loading...</h1>;
  if (isError) return <h1>{error}</h1>;

  return (
    <section>
      <div>
        {data?.pages.map((page, index) => {
          return (
            <ul key={index}>
              {page.map((user) => {
                return (
                  <li key={user.id}>
                    {inView}
                    <p>{user.login}</p>
                    <img
                      src={user.avatar_url}
                      alt=""
                      width={100}
                      height={100}
                      />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div ref={ref}>
        {isFetchingNextPage
          ? "Loading..."
          : hasNextPage
            ? "Load More"
            : "No more Users"}
      </div>
    </section>
  );
};
