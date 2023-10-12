const endpoint = "convert";
const access_key = "5518711f5b2a87ba53ea898b";

export const fetchExchangeRates = async (from, to, amount) => {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${access_key}/pair/${from}/${to}/${amount}`
  );

  return response.json();
};
