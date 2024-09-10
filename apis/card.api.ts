export const getCard = async () => {
  const data = await fetch("https://wovenclouds.com/arrovia/api/search/random");
  console.log(data);
  return data;
};
