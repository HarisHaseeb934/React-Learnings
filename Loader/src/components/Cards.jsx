import { CiHeart } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { LuBedDouble, LuSquareArrowUpRight } from "react-icons/lu";
import { TbBath } from "react-icons/tb";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import { TbBuildings } from "react-icons/tb";

export const Card = () => {
  const [isSale, setSale] = useState(true);

  return (
    <div className="group relative flex w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl font-syne">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src="./Bed.jpg"
          alt="Modern 3 Bedroom Apartment"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className={`rounded-full ${isSale ? "bg-green-800" : "bg-dark1"} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
            {isSale ? "For Sale" : "For Rent"}
          </span>
          <button
            type="button"
            aria-label="Add to favorites"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500"
          >
            <CiHeart className="text-xl" />
          </button>
        </div>
        {isSale && (
          <div className="absolute bottom-0 p-2 bg-dark1 rounded-full m-2">
            PKR 38,000,000
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
            <IoLocationSharp className={`text-xl ${isSale ? "text-green-800" : "text-red-900"}`} />
            DHA Phase 5, Karachi
          </p>
          <h3 className="text-lg font-bold text-gray-900">
            Modern 3 Bedroom Apartment
          </h3>
        </div>

        <div className="flex items-center justify-between text-xs font-medium text-gray-600 border-b border-gray-100 py-3">
          <span className="flex items-center gap-1.5">
            <LuBedDouble className="text-base text-gray-400" /> 3 Beds
          </span>
          <span className="flex items-center gap-1.5">
            <TbBath className="text-base text-gray-400" /> 3 Baths
          </span>
          <span className="flex items-center gap-1.5">
            <LuSquareArrowUpRight className="text-base text-gray-400" /> 1,250
            Sq Ft
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          {isSale ? (
            <div className="flex items-center text-dark gap-3">
              <div className="bg-green-100">
              <TbBuildings className="text-green-800 text-2xl m-1 rounded-xl"/>
              </div>
              <div>
                <p className="text-[13px]">Built-up Area</p>
                <p className="font-semibold text-[14px]">5,500 Sq Ft</p>
              </div>
            </div>
          ) : (
            <p className="flex items-baseline gap-1 text-xs text-gray-500">
              <span className="text-xl font-extrabold text-gray-900">
                PKR 12,000
              </span>
              / Month
            </p>
          )}

          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-semibold text-dark1 leading-none transition-colors hover:text-opacity-80"
          >
            <span className={`inline-block ${isSale ? "text-green-800" : "text-red-900"}`}>View Details</span>
            <HiOutlineArrowNarrowRight className="text-lg transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
