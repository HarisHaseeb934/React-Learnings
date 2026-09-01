import { useState } from "react";
import Filter from "./Ui/Filter";
import ProductCard from "./Ui/ProductCard";
import { getProducts } from "../Api/axiosInstance";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { SkeletonLosder } from "./Ui/SekeltonLoader";

const Shop = () => {
  const [category, setCateogry] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [rating, setRating] = useState(5);

  const [skip, setSkip] = useState(0);
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [`products`, skip],
    queryFn: () => getProducts(skip),
    placeholderData: keepPreviousData,
  });

  // console.log(category)
  // console.log(priceRange)
  // console.log(rating)

  function handleSkipForward() {
    setSkip((prev) => prev + 10);
  }
  function handleSkipPrevious() {
    setSkip((prev) => prev - 10);
  }

  // console.log(products?.data.products);

  if (isLoading) return <SkeletonLosder />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <section className="w-full">
      <div className="max-w-6xl w-full m-auto flex flex-col md:flex-row gap-4 p-3">
        <Filter
          setCategory={setCateogry}
          setPriceRange={setPriceRange}
          setRating={setRating}
        />
        <div className="w-full p-3">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center place-items-center">
            {products &&
              products?.data.products.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductCard {...product} />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="flex m-auto w-20 gap-5">
        <button
          className="bg-indigo-600 text-white p-1 rounded-full"
          disabled={skip <= 0 ? true : false}
          onClick={handleSkipPrevious}
        >
          <IoIosArrowBack />
        </button>
        <p>{skip / 10 + 1}</p>
        <button
          className="bg-indigo-600 text-white p-1 rounded-full"
          onClick={handleSkipForward}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default Shop;
