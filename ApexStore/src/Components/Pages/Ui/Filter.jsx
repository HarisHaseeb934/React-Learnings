import CategoryCheck from "./CategoryCheck"
import PriceRange from "./PriceRange"
import Rating from "./Rating"

const Filter = () => {
  return (
    <section className="bg-[#F2F3FF] p-5 rounded-2xl">
        <h1 className="text-3xl font-bold pb-2 border-b border-slate-200">Filter</h1>
        <CategoryCheck/>
        <PriceRange/>
        <Rating/>
    </section>
  )
}

export default Filter