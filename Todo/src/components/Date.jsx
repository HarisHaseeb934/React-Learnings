import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");
  function getDate(){
    const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
  }

  setInterval(()=>{
    getDate();
  })
  return <h2 className="date-time">{dateTime}</h2>;
};