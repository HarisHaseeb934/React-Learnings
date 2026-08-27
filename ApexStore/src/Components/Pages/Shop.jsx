import { useState } from "react";
import Filter from "./Ui/Filter";
import ProductCard from "./Ui/ProductCard";
import { getProducts } from "../Api/axiosInstance";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const Shop = () => {
  const [category, setCateogry] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [rating, setRating] = useState(5);

  const [skip, setSkip] = useState(0);
  const {data: products, isLoading, isError, error} = useQuery({
    queryKey: [`products`, skip],
    queryFn: () => getProducts(skip),
    placeholderData: keepPreviousData,
  })

  // console.log(category)
  // console.log(priceRange)
  // console.log(rating)

  console.log(products?.data.products)

  return (
    <section className="w-full">
      <div className="max-w-6xl w-full m-auto flex flex-col md:flex-row gap-4 p-3">
        <Filter
          setCategory={setCateogry}
          setPriceRange={setPriceRange}
          setRating={setRating}
        />
        <div className="w-full">
            {
              products?.data.products.map(product => {
                return <ProductCard key={product.id} {...product}/>
              })
            }
        </div>
      </div>
    </section>
  );
};

export default Shop;
