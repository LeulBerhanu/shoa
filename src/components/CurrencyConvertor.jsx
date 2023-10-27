import React, { useEffect, useState } from "react";
import { fetchExchangeRates } from "../services/fxService";
import { AiOutlineSwap } from "react-icons/ai";
import { US, ET } from "country-flag-icons/react/3x2";

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
        console.error("error occurred while fetching", err);
      });
  }, [fromCurr, toCurr, currency1]); // Updated dependencies

  function handleSwap() {
    setSwapCurrency((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-8 text-black text-2xl md:text-3xl">
      <div>
        <label>
          {swapCurrency ? (
            <div className="flex items-center gap-x-2">
              <p>ETB</p>
              <div className="flex w-5 h-5 md:w-7 md:h-7">
                <ET title="Ethiopia" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <p>USD</p>
              <div className="flex w-5 h-5 md:w-7 md:h-7">
                <US title="United States" />
              </div>
            </div>
          )}
          <input
            type="text"
            value={currency1}
            onChange={(e) => setCurrency1(e.target.value)}
            className="w-full mt-1 px-3 py-2 text-black rounded-md outline-none"
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
        <label>
          {swapCurrency ? (
            <div className="flex items-center gap-x-2">
              <p>USD</p>
              <div className="flex w-5 h-5 md:w-7 md:h-7">
                <US title="United States" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <p>ETB</p>
              <div className="flex w-5 h-5 md:w-7 md:h-7">
                <ET title="Ethiopia" />{" "}
              </div>
            </div>
          )}
          <input
            type="text"
            disabled
            value={currency2}
            onChange={(e) => setCurrency2(e.target.value)}
            className="w-full mt-1 px-3 py-2 text-black rounded-md outline-none"
          />
        </label>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
