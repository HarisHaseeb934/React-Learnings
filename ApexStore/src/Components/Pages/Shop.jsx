import { useState } from "react";
import Filter from "./Ui/Filter";

const Shop = () => {
  const [category,setCateogry] = useState([]);
  const [priceRange,setPriceRange] = useState(0);
  const [rating,setRating] = useState(5);

  // console.log(category)
  // console.log(priceRange)
  // console.log(rating)

  return (
    <section className="w-full">
      <div className="max-w-6xl w-full m-auto">
        <Filter setCategory={setCateogry} setPriceRange={setPriceRange} setRating={setRating}/>  
      </div>
    </section>
  );
};

export default Shop;
