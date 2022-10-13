import React from 'react';
import { createPortal } from 'react-dom';
import MenuTabs from './MenuTabs';
import logo from '../Assets/EH.png';

const MobileTabs = ({ close }) => {
  return createPortal(
    <div className="fixed bg-blue w-[100vw] h-[100vh] z-10">
      <div className="flex flex-col justify-center items-center gap-20 mt-[45%] text-beige">
        <img className="h-32 w-32 rounded-full hover:scale-150" src={logo} alt="logo"></img>
        <MenuTabs close={close} />
        <div className="max-w-[15em] text-center">
          <p>
            Copyright &copy;2022 All rights reserved <br /> made with &#10084; by Eid hachem
          </p>
        </div>
      </div>
    </div>,
    document.getElementById('mobile'),
  );
};

export default MobileTabs;
