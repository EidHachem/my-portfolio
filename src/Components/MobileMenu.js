import React, { useState, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import MobileTabs from './MobileTabs';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#projects').style.display = 'none';
    document.querySelector('#articles').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
    document.body.addEventListener('wheel', preventScroll, { passive: false });
  };

  const closeMenu = () => {
    setIsOpen(!isOpen);
    document.querySelector('#home').style.display = 'flex';
    document.querySelector('#about').style.display = 'flex';
    document.querySelector('#projects').style.display = 'block';
    document.querySelector('#articles').style.display = 'block';
    document.querySelector('#contact').style.display = 'block';
    document.body.removeEventListener('wheel', preventScroll, { passive: false });
  };

  const preventScroll = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div className="sticky top-0 lg:hidden">
      <div className="w-[150px] h-[150px] bg-orange border rounded-full fixed top-[-70px] left-[-70px] border-none opacity-90">
        {isOpen ? (
          <FaTimes
            className="fixed top-4 left-4 w-[35px] h-[35px] cursor-pointer text-[#fff]"
            onClick={closeMenu}
          />
        ) : (
          <FaBars
            className="fixed top-4 left-4 w-[30px] h-[30px] cursor-pointer text-[#fff]"
            onClick={openMenu}
          />
        )}
      </div>
      {isOpen && <MobileTabs close={closeMenu} />}
    </div>
  );
};

export default MobileMenu;
