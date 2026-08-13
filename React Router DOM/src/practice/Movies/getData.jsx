export const getData = async () => {
  const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`;

  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error("Response is not OK");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
