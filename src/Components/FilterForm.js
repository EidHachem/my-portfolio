import React, { useState } from 'react';

const FilterForm = ({ filter, setFilter }) => {
  const [all, setAll] = useState(true);
  const [frontEnd, setFrontEnd] = useState(false);
  const [fullStack, setFullStack] = useState(false);
  return (
    <div className="main hidden lg:flex border rounded-full overflow-hidden m-4 select-none h-[3em] mb-16">
      <div className="title w-[8em] flex justify-center items-center bg-[#fff] text-blue font-bold text-xl border-r-2">
        Choose stack
      </div>
      <label
        htmlFor="all"
        className={`text-blue font-bold text-xl flex radio py-2 w-[8em] justify-center items-center cursor-pointer border-r-2 ${
          all && 'bg-blue text-beige'
        }`}>
        <input
          type="radio"
          name="project"
          id="all"
          className="hidden"
          value={filter}
          onClick={() => {
            setFilter('front-end' || 'full-stack');
            setAll(true);
            setFrontEnd(false);
            setFullStack(false);
          }}
        />
        <div className="title px-2">All</div>
      </label>
      <label
        htmlFor="front-end"
        className={`text-blue font-bold text-xl flex radio py-2 w-[8em] justify-center items-center cursor-pointer border-r-2 ${
          frontEnd && 'bg-blue text-beige'
        }`}>
        <input
          type="radio"
          name="project"
          id="front-end"
          className="hidden"
          value={filter}
          onClick={() => {
            setFilter('front-end');
            setFrontEnd(true);
            setAll(false);
            setFullStack(false);
          }}
        />
        <div className="title px-2">Front-end</div>
      </label>
      <label
        htmlFor="full-stack"
        className={`text-blue font-bold text-xl flex radio py-2 w-[8em] justify-center items-center cursor-pointer ${
          fullStack && 'bg-blue text-beige'
        }`}>
        <input
          type="radio"
          name="project"
          id="full-stack"
          className="hidden"
          value={filter}
          onClick={() => {
            setFilter('full-stack');
            setFullStack(true);
            setAll(false);
            setFrontEnd(false);
          }}
        />
        <div className="title px-2">Full-stack</div>
      </label>
    </div>
  );
};

export default FilterForm;
