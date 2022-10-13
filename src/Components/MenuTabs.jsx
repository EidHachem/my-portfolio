import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';

const MenuTabs = () => {
  return (
    <>
      <div className="flex flex-col justify-around items-start gap-6">
        <div className="flex justify-center items-center gap-9">
          <FaHome />
          <p className="text-lg font-bold">Home</p>
        </div>
        <div className="flex justify-center items-center gap-9">
          <CgWebsite />
          <p className="text-lg font-bold">Projects</p>
        </div>
        <div className="flex justify-center items-center gap-9">
          <FaBookOpen />
          <p className="text-lg font-bold">Articles</p>
        </div>
        <div className="flex justify-center items-center gap-9">
          <TbMessageCircle />
          <p className="text-lg font-bold">Contact</p>
        </div>
      </div>
    </>
  );
};

export default MenuTabs;
