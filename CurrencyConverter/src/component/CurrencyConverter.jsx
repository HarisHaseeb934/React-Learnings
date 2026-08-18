import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCurrency } from "../api/axiosInstance";

export const CurrencyConverter = () => {
  const [input, setInput] = useState({ amount: 0, from: "PKR", to: "USD" });
  const [currency, setCurrency] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //   const { data, isFetching, isPending, isError, error } = useQuery({
  //     queryKey: ["curreny"],
  //     queryFn: () => getCurrency(),
  //     enabled: s
  //   });

  const converter = async (input) => {
    setLoading(true);
    // console.log(input)
    try {
      const res = await getCurrency(input);
      if (res.status === 200) {
        console.log(res.data);
        setCurrency(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    converter(input);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className="w-full h-screen bg-black p-2">
      <div className="w-full max-w-lg m-auto text-center bg-white flex flex-col p-5 rounded-3xl">
        <h1 className="font-bold text-3xl">Currency Converter</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          <div className="">
            <label htmlFor="amount">Amount: </label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter Amount"
              value={input.amount}
              onChange={handleChange}
              className="p-2 outline-none border rounded-3xl"
            />
          </div>
          <div className="flex justify-evenly items-center">
            <label>
              From:
              <select
                name="from"
                id="from"
                onChange={handleChange}
              >
                <option value="PKR">PKR</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="GBP">GBP</option>
              </select>
            </label>

            <label>
              To:
              <select
                name="to"
                id="to"
                onChange={handleChange}
              >
                <option value="PKR">USD</option>
                <option value="EUR">EUR</option>
                <option value="PKR">PKR</option>
                <option value="AUD">AUD</option>
                <option value="GBP">GBP</option>
              </select>
            </label>
          </div>

          <button type="submit" disabled={input.amount <= 0 ? true : false} className="bg-green-500 p-2 text-white">
            Convert
          </button>
        </form>

        {currency && (
          <div>
            {input.amount} {input.from} = {currency.conversion_result} {input.to}
          </div>
        )}
      </div>
    </section>
  );
};
