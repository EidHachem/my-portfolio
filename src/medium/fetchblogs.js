const fetchBlogs = async () => {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@eidhachem1',
  );
  const data = await res.json();
  const articles = data.items;
  return articles;
};

export default fetchBlogs;
