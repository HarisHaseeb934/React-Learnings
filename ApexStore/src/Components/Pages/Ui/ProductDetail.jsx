import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import StarRating from "./StarRating";

const ProductDetail = () => {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2hVmb0Zn5Fndqk61L55mn0PNGcPV7r57t3mAlHCEaBXiwDU-_9NoE5qAeihaT6h_R6Hko394tCcVXP5nFWhZ-ahJw94kUjU65D_OlqC9T4HvJwr2UGglCmKhQOzQE9kW7ylHQl4fNHgK5pVITDjxX5mXYeVrk-idaXwCswrHRDHOuNqqsC_1flm38qE02Dl1y3amrBW9CxSZ9fpdohdVRiI38qfSAw7VZwM_Um2-f8UnP94vDquLa",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0eB8-v0T8C0v8Q1G4v08J_R1O5p04z3M7A31Y5j4b6C_10fL4kY9jX4y4t05J0v8k9w04",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3k84j0-91v05kY48z-75618_9L08J-64kY9jX4y4t05J0v8k9w04",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1k094-11v05kY48z-75618_9L08J-64kY9jX4y4t05J0v8k9w04",
  ];
  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <section className="w-full bg-slate-50/50 py-10 px-4">
      <div className="max-w-6xl w-full m-auto flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="w-full aspect-[4/5] transition-all cursor-zoom-in group overflow-hidden rounded-xl">
            <img
              src={selectedImg}
              alt=""
              className="w-full h-full object-cover hover:scale-105 duration-500 transition-all "
            />
          </div>
          <div className="flex gap-2">
            {images.map((img, index) => {
              return (
                <button
                  onClick={() => setSelectedImg(img)}
                  className={`overflow-hiddden aspect-square size-20 rounded-xl  ${selectedImg === img ? "border-indigo-500 border" : "opacity-80 hover:opacity-100"}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Detail />
        </div>
      </div>

      <div className="max-w-6xl w-full m-auto flex flex-col">
        <Reviews />
      </div>
    </section>
  );
};

const Detail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col h-full gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-indigo-600 font-bold text-xs">Apex Labs</span>
          <span className="text-slate-300">•</span>
          <StarRating initialRating={4.8} readOnly={true} />
          <span className="font-semibold text-slate-800">4.8</span>
          <span className="text-slate-500">(120 reviews)</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Quantum X Pro Horizon Series
        </h1>
        <p className="text-slate-600 text-sm">
          Experience unparalleled precision and aerial stability with the next
          generation of professional-grade imaging equipment. Engineered for
          creators.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-slate-900">
            $599.00
          </span>
          <span className="text-xl font-medium text-slate-400 line-through">
            $749.00
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-rose-600">
          Stock
        </div>
      </div>

      <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/60 flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
          <span className="text-xl">Quantity</span>
          <div className="flex items-center gap-3 bg-white px-4 rounded-2xl border border-slate-200">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="text-slate-500 text-2xl hover:text-slate-800 font-bold flex items-center"
            >
              -
            </button>
            <span className="font-semibold text-slate-800 text-center text-lg">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-slate-500 text-xl hover:text-slate-800 font-bold flex items-center"
            >
              +
            </button>
          </div>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors">
          <IoCartOutline className="text-xl" /> Add to Cart
        </button>

        <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 rounded-xl border border-slate-200 transition-colors">
          Buy Now
        </button>
      </div>

      <div className="grid grid-cols-2 gap-y-3 gap-x-4 p-2">
        <div className="flex items-center gap-2.5">
          <FiTruck className="text-indigo-600 text-lg" />
          <span className="text-xs text-slate-600 font-medium">
            Free 2-Day Shipping
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <IoShieldCheckmarkOutline className="text-indigo-600 text-lg" />
          <span className="text-xs text-slate-600 font-medium">
            2 Year Warranty
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <MdOutlineAssignmentReturn className="text-indigo-600 text-lg" />
          <span className="text-xs text-slate-600 font-medium">
            30-Day Returns
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <MdOutlineSupportAgent className="text-indigo-600 text-lg" />
          <span className="text-xs text-slate-600 font-medium">
            24/7 Priority Support
          </span>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Reviews 120</h1>
      <ul className="divide-y-2">
        <li className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-slate-300 flex items-center size-10 font-bold justify-center rounded-full ">E</div>
              <div>
                <p className="text-xs text-slate-500">Name</p>
                <p className="text-xs text-slate-500">Email</p>
              </div>
            </div>
            <div>
              <StarRating initialRating={4}/>
            </div>
          </div>

          <div className="p-3">
            comment
          </div>
        </li>
        <li className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-slate-300 flex items-center size-10 font-bold justify-center rounded-full ">E</div>
              <div>
                <p className="text-xs text-slate-500">Name</p>
                <p className="text-xs text-slate-500">Email</p>
              </div>
            </div>
            <div>
              <StarRating initialRating={4}/>
            </div>
          </div>

          <div className="p-3">
            comment
          </div>
        </li>
        <li className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-slate-300 flex items-center size-10 font-bold justify-center rounded-full ">E</div>
              <div>
                <p className="text-xs text-slate-500">Name</p>
                <p className="text-xs text-slate-500">Email</p>
              </div>
            </div>
            <div>
              <StarRating initialRating={4}/>
            </div>
          </div>

          <div className="p-3">
            comment
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetail;
