import { useEffect, useState } from "react"
import faq from "../API/faq.json"
import { FAQ } from "./FAQ";

export const Accordian = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeId, setActiveId] = useState(false);

  const handleClick = (id) => {
    setActiveId(prev => prev === id ? false : id)
  }

  useEffect(() => {
    setFaqs(faq);
  },[]);

  return(
    <section className="bg-[rgb(23,31,41)] h-screen p-5">
      <h1 className="text-2xl underline text-white text-center mb-5">Accordian</h1>
      <ul className="max-w-xl m-auto w-full ">{
          faqs.map(faq => (
            <FAQ key={faq.id} {...faq} isActive = {activeId === faq.id} onToggle = {() => handleClick(faq.id)}/>
          ))
        }</ul>
    </section>
  )
}