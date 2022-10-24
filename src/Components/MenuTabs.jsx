import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaBookOpen, FaHome, FaInfoCircle } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';

const MenuTabs = ({ close }) => {
  const action = () => {
    close();
  };
  return (
    <>
      <div className="flex flex-col justify-around items-start gap-6">
        <a href="#home" onClick={action}>
          <div className="flex justify-center items-center gap-9">
            <FaHome />
            <p className="text-lg font-bold">Home</p>
          </div>
        </a>
        <a href="#projects" onClick={action}>
          <div className="flex justify-center items-center gap-9">
            <CgWebsite />
            <p className="text-lg font-bold">Projects</p>
          </div>
        </a>
        <a href="#about" onClick={action}>
          <div className="flex justify-center items-center gap-9">
            <FaInfoCircle />
            <p className="text-lg font-bold">About</p>
          </div>
        </a>
        <a href="#articles" onClick={action}>
          <div className="flex justify-center items-center gap-9">
            <FaBookOpen />
            <p className="text-lg font-bold">Articles</p>
          </div>
        </a>
        <a href="#contact" onClick={action}>
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
