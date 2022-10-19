import React from 'react';

const FilterForm = ({ filter, setFilter }) => {
  return (
    <div class="main flex border rounded-full overflow-hidden m-4 select-none h-[3em] mb-16">
      <div class="title w-[8em] flex justify-center items-center bg-blue text-beige font-semibold text-xl">
        Choose stack
      </div>
      <label
        htmlFor="all"
        className="text-purple font-bold text-xl mr-5 flex radio py-2 w-[8em] justify-center items-center cursor-pointer border-r-2">
        <input
          type="radio"
          name="project"
          id="all"
          className="my-auto transform scale-125"
          value={filter}
          onClick={(e) => setFilter('front-end' || 'full-stack')}
        />
        <div class="title px-2">All</div>
      </label>
      <label
        htmlFor="front-end"
        className="text-purple font-bold text-xl mr-5 flex radio py-2 w-[8em] justify-center items-center cursor-pointer border-r-2">
        <input
          type="radio"
          name="project"
          id="front-end"
          className="my-auto transform scale-125"
          value={filter}
          onClick={(e) => setFilter('front-end')}
        />
        <div class="title px-2">Front-end</div>
      </label>
      <label
        htmlFor="full-stack"
        className="text-purple font-bold text-xl mr-5 flex radio py-2 w-[8em] justify-center items-center cursor-pointer">
        <input
          type="radio"
          name="project"
          id="full-stack"
          className="my-auto transform scale-125"
          value={filter}
          onClick={(e) => setFilter('full-stack')}
        />
        <div class="title px-2">Full-stack</div>
      </label>
    </div>
  );
};

export default FilterForm;
