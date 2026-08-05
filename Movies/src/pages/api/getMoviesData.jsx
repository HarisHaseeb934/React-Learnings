export const getMoviesDate = async () => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`,
    );
    if(!response.ok) throw new Error("Data Not Found")
    // const data = await response.json();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
