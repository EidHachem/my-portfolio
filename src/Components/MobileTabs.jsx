import React from 'react';
import { createPortal } from 'react-dom';
import MenuTabs from './MenuTabs';

const MobileTabs = () => {
  return createPortal(
    <div className="fixed bg-blue w-[100vw] h-[100vh] z-10">
      <div className="flex flex-col justify-center items-center gap-36 mt-[45%] text-beige">
        <MenuTabs />
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
