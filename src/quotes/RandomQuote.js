const fetchQuotes = async () => {
  const res = await fetch('https://programming-quotes-api.herokuapp.com/quotes/random');
  const data = await res.json();
  return data;
};

export default fetchQuotes;
