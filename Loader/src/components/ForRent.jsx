import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { PiHouseLineLight } from "react-icons/pi";

import { Cards } from "./Cards";
import { useState } from "react";

export const ForRent = () => {
  const [isSale, setSale] = useState(true);
  return (
    <section className="font-syne bg-dark1 text-off-white">
      <div
        className={`flex items-center gap-2 ${isSale ? "text-green-800" : "text-[rgb(178,136,79)]"}`}
      >
        <HiOutlineArrowNarrowRight />
        <p className={`flex items-center gap-2`}>
          {isSale ? (
            <>
              <PiHouseLineLight className="text-xl" /> PREMIUM PROPERTIES
            </>
          ) : (
            "PREMIUM LIVING SPACES"
          )}
        </p>
        <HiOutlineArrowNarrowLeft />
      </div>
      <div>
        <h1>Properties For Rent</h1>
        <p>Discover a wide range Of handpicked rental properties that</p>
        <p>offer comfort, convenience, and exceptional value.</p>
      </div>
      <div className="flex m-auto gap-5">
        <Cards isSale={isSale} />
        <Cards isSale={isSale} />
        <Cards isSale={isSale} />
      </div>
    </section>
  );
};
