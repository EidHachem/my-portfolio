import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileTabs from './MobileTabs';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.height = '100%';
    document.body.style.overflowY = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflowY = 'visible';
  };

  return (
    <div className="sticky top-0 xl:hidden z-40">
      <div className="w-[150px] h-[150px] z-50 bg-orange border rounded-full fixed top-[-70px] left-[-70px] border-none opacity-90">
        <FaBars
          className="fixed top-4 left-4 w-[30px] h-[30px] cursor-pointer text-beige"
          onClick={openMenu}
        />
      </div>
      {isOpen && <MobileTabs close={closeMenu} closeMenu={closeMenu} />}
    </div>
  );
};

export default MobileMenu;
