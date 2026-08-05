export const getMovieData = async({params}) => {
    try{
        const response = await fetch(`https://www.omdbapi.com/?i=${params.imdbID}&apikey=${import.meta.env.VITE_API_KEY}`)
        if(!response.ok) throw new Error("Movie Data not Found");
        // const data = await response.json()
        return response;
    }catch(error){
        console.log(error);
    }
}