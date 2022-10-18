import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaBookOpen, FaHome } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';

const MenuTabs = ({ close }) => {
  return (
    <>
      <div className="flex flex-col justify-around items-start gap-6">
        <a href="#home" onClick={close}>
          <div className="flex justify-center items-center gap-9">
            <FaHome />
            <p className="text-lg font-bold">Home</p>
          </div>
        </a>
        <a href="#projects" onClick={close}>
          <div className="flex justify-center items-center gap-9">
            <CgWebsite />
            <p className="text-lg font-bold">Projects</p>
          </div>
        </a>
        <a href="#articles" onClick={close}>
          <div className="flex justify-center items-center gap-9">
            <FaBookOpen />
            <p className="text-lg font-bold">Articles</p>
          </div>
        </a>
        <a href="#contact" onClick={close}>
          <div className="flex justify-center items-center gap-9">
            <TbMessageCircle />
            <p className="text-lg font-bold">Contact</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default MenuTabs;
