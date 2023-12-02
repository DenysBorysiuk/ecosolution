'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navigation from '@/components/ui/Navigation';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  //  useEffect(() => {
  //    const handleKeyDown = event => {
  //      if (event.code === 'Escape') {
  //        onClose();
  //      }
  //    };
  //    window.addEventListener('keydown', handleKeyDown);
  //    return () => {
  //      window.removeEventListener('keydown', handleKeyDown);
  //    };
  //  }, [onClose]);

  //  const handleBackdropClick = e => {
  //    if (e.currentTarget === e.target) {
  //      onClose();
  //    }
  // };

  return (
    <div className="ml-auto ">
      <button
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DCEFD8]  hover:bg-accent"
        onClick={() => setIsOpen(true)}
      >
        <Image src="/icons/menu.svg" alt="menu-button" width={16} height={16} />
      </button>

      {/* menu */}
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-[100vh] w-[100vw] bg-primary/25 
          px-[20px] pt-[36px]"
        >
          <div className=" h-[701px] rounded-[25px] bg-primary/75 p-[24px]">
            <button
              className="text-[20px] text-white"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              close
            </button>
            <div className="mb-[24px] h-[1px] w-full bg-white" />
            <Navigation />
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
