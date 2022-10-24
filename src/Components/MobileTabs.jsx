import React from 'react';
import { createPortal } from 'react-dom';
import MenuTabs from './MenuTabs';
import logo from '../Assets/EH.png';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const MobileTabs = ({ close, closeMenu }) => {
  return createPortal(
    <div className="h-[100vh]">
      <div className="w-[150px] h-[150px] z-50 bg-orange border rounded-full fixed top-[-70px] left-[-70px] border-none opacity-90">
        <FaTimes
          className="fixed top-4 left-4 w-[35px] h-[35px] cursor-pointer text-beige z-50"
          onClick={closeMenu}
        />
      </div>
      <div className="fixed bg-blue w-[100vw] h-[100vh] z-40">
        <div className="flex flex-col justify-center items-center gap-20 mt-[25%] lg:mt-[10%] text-beige">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ duration: 3 }}
            className="h-32 w-32 rounded-full hover:scale-150"
            src={logo}
            alt="logo"></motion.img>
          <MenuTabs close={close} />
          <div className="max-w-[15em] text-center">
            <p>
              Copyright &copy;2022 All rights reserved <br /> made with &#10084; by Eid hachem
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('mobile'),
  );
};

export default MobileTabs;
