import { useEffect, useLayoutEffect, useRef } from "react"

export const Animation = () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const el = ref.current;
        const width = el.offsetWidth;
        el.style.transform = `translateX(${width}px)`
    },[])

    return <div ref={ref} style={{border: "1px solid black", transition: "3s"}}> hy </div>
}