import { useEffect, useEffectEvent, useState } from "react";

const useTimer = (duration, onTick) => {
  const [seconds, setSeconds] = useState(duration);

  const onTickMessage = useEffectEvent((seconds) => {
    onTick(seconds);
  });

  useEffect(() => {

    let timerID = setInterval(() => {
      setSeconds((perv) => {
        const next = prev - 1;

        onTickMessage(next);

        if (next <= 0) {
          clearInterval(timerID);
        }

        return next;
      });

    }, duration);
    return () => {
      clearInterval(timerID);
    };
  }, [duration]);

  return seconds;
};
