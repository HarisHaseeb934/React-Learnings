import { FaRegEnvelope } from "react-icons/fa";
import { BsEnvelopePaper } from "react-icons/bs";
import { MdOutlineLock } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

export const NewsLetter = () => {
  return (
    <section className="w-full font-syne py-16 px-4 flex justify-center items-center">
      <div className="max-w-xl w-full flex flex-col items-center text-center">
        
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <BsEnvelopePaper className="text-emerald-700 text-3xl" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          Stay Updated
        </h1>
        <p className="text-slate-600 max-w-md text-base sm:text-lg mb-8">
          Subscribe to our newsletter and get the latest updates, news, and
          exclusive offers straight to your inbox.
        </p>

        <form className="w-full max-w-lg border border-gray-200 rounded-lg flex items-center bg-white mb-6">
          <div className="flex items-center flex-1 px-3 gap-3">
            <FaRegEnvelope className="text-slate-400 text-xl flex-shrink-0" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full outline-none text-slate-700 placeholder-slate-400 py-2"
            />
          </div>
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-[#136e43] hover:bg-[#0f5835] text-white rounded-md font-medium text-base transition-colors flex-shrink-0"
          >
            Subscribe <GoArrowRight className="text-lg" />
          </button>
        </form>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <MdOutlineLock className="text-emerald-600" />
          <p>We respect your privacy. Unsubscribe anytime.</p>
        </div>

      </div>
    </section>
  );
};