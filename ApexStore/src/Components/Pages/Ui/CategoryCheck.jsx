import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../Api/axiosInstance";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const CategoryCheck = () => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [isHide, setHide] = useState(false);
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  console.log(categories);

  function handleCategoryChange(e) {
    const { value } = e.target;
    if (e.target.checked) {
      setFilterCategories((prev) => [...prev, value]);
    } else {
      setFilterCategories((prev) => prev.filter((item) => item != value));
    }
  }

  console.log(filterCategories);

  return (
    <div className="py-3 flex flex-col gap-3">
      <button
        className="text-[#2D3447] font-bold text-lg flex items-center justify-between w-40"
        onClick={() => setHide((prev) => !prev)}
      >
        Category
        {isHide ? (
          <RiArrowDropDownLine className="text-2xl" />
        ) : (
          <RiArrowDropUpLine className="text-2xl" />
        )}
      </button>
      {isHide && (
        <ul className="flex flex-col gap-2 transition-all transition-discrete duration-300 translate-y 0 opacity-100 starting: starting:opacity-0 starting:-translate-y-2">
          {categories?.map((item, index) => {
            return (
              <li key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  id={item.slug}
                  name={item.slug}
                  value={item.name}
                  onChange={handleCategoryChange}
                />
                <label
                  htmlFor={item.slug}
                  className="font-medium text-[#656B7B]"
                >
                  {item.name}
                </label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CategoryCheck;
