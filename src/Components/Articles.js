import React from 'react';
import fetchBlogs from '../medium/fetchblogs';

const Articles = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetchBlogs().then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <div
      id="articles"
      className="min-h-[100vh] w-[100%] py-2 px-5 text-center bg-gainsboro lg:px-0 lg:py-5">
      <h2 className="text-center pt-10 mb-10 text-blue font-extrabold text-4xl font-handlee lg:text-7xl lg:pt-20 lg:mb-20">
        Articles
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-y-20 gap-x-20">
        {blogs &&
          blogs.map((blog) => (
            <div
              className="max-w-md rounded overflow-hidden shadow-lg bg-opacity-40 border-spacing-6 border-blue border-2 bg-lightGray h-[31em]"
              key={blog.title}>
              <h3 className="font-bold text-xl mb-2 text-center mt-2">{blog.title}</h3>
              <div
                className="overflow-hidden mb-6 p-2"
                dangerouslySetInnerHTML={{ __html: blog.description.slice(0, 200) + '...' }}
              />
              <a
                href={blog.link}
                target="_blank"
                rel="noreferrer"
                className="bg-blue text-beige p-2 rounded">
                Read More
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Articles;
