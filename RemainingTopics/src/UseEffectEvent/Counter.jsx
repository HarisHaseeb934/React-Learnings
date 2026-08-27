import { useEffect, useEffectEvent, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const show = useEffectEvent(()=> {
    console.log(count);
  })

  useEffect(() => {
    const timerId = setInterval(() => {
      show();
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
        clearInterval(timerId)
    }
  }, []);

  return <h1>{count}</h1>;
};
