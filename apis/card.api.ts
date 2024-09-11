export const getCard = async () => {
  const data = await fetch("https://api.aroovia.com/api/search/random");
  console.log(data);
  return await data.json();
};
