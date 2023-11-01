const endpoint = "convert";
const access_key = "4f26c46653db1b75edc3cdd6";

export const fetchExchangeRates = async (from, to, amount) => {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${access_key}/pair/${from}/${to}/${amount}`
  );

  return response.json();
};
