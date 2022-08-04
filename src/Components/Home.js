import React from 'react';

const Home = () => {
  return (
    <div className="h-[100vh] w-[100%]  flex flex-col justify-center items-center gap-8 text-center ">
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt="Eid"
        className="h-52 w-52 rounded-full"
      />
      <h3 className="text-4xl font-medium">Hello I'm</h3>
      <h1 className="text-7xl font-semibold text-purple">Eid Hachem</h1>
      <p className="max-w-screen-md">
        I am A Blogger Far far away, behind the word mountains, far from the countries Vokalia and
        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
        coast of the Semantics, a large language ocean.
      </p>
    </div>
  );
};

export default Home;
