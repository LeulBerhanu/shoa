import React, { useEffect, useState } from "react";
import { fetchExchangeRates } from "../services/fxService";
import { AiOutlineSwap } from "react-icons/ai";

function CurrencyConvertor() {
  const [currency1, setCurrency1] = useState(1);
  const [currency2, setCurrency2] = useState(0);

  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("ETB");

  const [swapCurrency, setSwapCurrency] = useState(false);

  useEffect(() => {
    if (swapCurrency) {
      setFromCurr("ETB");
      setToCurr("USD");
    } else {
      setFromCurr("USD");
      setToCurr("ETB");
    }

    setCurrency1(1);
    setCurrency2(0);
  }, [swapCurrency]);

  useEffect(() => {
    fetchExchangeRates(fromCurr, toCurr, currency1)
      .then((data) => {
        setCurrency2(data.conversion_result);
        console.log("data", data);
      })
      .catch((err) => {
        console.error("error occured while fetching", err);
      });
  }, [currency1, currency2]);

  function handleSwap() {
    setSwapCurrency((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-3 text-black">
      <div>
        <label className="px-1">
          {swapCurrency ? "ETB" : "USD"}
          <input
            type="text"
            value={currency1}
            onChange={(e) => setCurrency1(e.target.value)}
            className="w-full px-2 text-black rounded-md"
          />
        </label>
      </div>

      <button
        onClick={handleSwap}
        className="flex items-center gap-2 px-1 hover:opacity-50"
      >
        <AiOutlineSwap /> Swap
      </button>

      <div>
        <label className="px-1">
          {swapCurrency ? "USD" : "ETB"}
          <input
            type="text"
            value={currency2}
            onChange={(e) => setCurrency2(e.target.value)}
            className="w-full px-2 text-black rounded-md"
          />
        </label>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
