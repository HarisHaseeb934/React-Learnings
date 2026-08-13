export const getMovieData = async({params}) => {
    const id = params.imdbID;
    try{
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        if(!response.ok) throw new Error("Movies Data is not Avaliable");
        const result = await response.json();
        // console.log(result)
        return result;
    }catch(error){
        console.log(error.message)
    }
}