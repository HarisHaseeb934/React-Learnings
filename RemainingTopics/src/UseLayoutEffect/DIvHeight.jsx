import { useEffect, useLayoutEffect, useRef } from "react"

export const DivHeight = () => {
    const div = useRef(null);
    useLayoutEffect(() => {
        console.log(div.current.clientHeight)
    },[])
    return <div ref = {div} style={{
        border: "1px solid red",
    }}>Hello i am div</div>
}