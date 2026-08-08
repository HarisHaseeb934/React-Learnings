import { useEffect } from "react"
import { getAPiData } from "../api/postAPi"
import { useTransition } from "react"
import { useState } from "react";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        startTransition(async () => {
            const res = await getAPiData();
            setCountries(res);
        })
    },[])

    if(isPending) return <Loader/>

    console.log(countries)
    return(
        <div>{countries}</div>
    )
}