'use client';

import { useEffect, useState, MouseEvent } from 'react';

import { Navigation, Socials } from '@/components/ui';

import Menu from 'public/icons/menu.svg';
import Close from 'public/icons/close.svg';

import data from '@/data/header.json';

export const BurgerMenu = () => {
  const { menuOpenBtnAriaLabel, menuCloseBtnLabel } = data;

  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState('main');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {};
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      setIsOpen(false);
    }
  };

  return (
    <div className="ml-auto">
      <button
        className="anim flex h-[40px] w-[40px] items-center justify-center rounded-full  bg-[#DCEFD8] hover:bg-accent focus:bg-accent"
        onClick={() => setIsOpen(true)}
        aria-label={menuOpenBtnAriaLabel}
        type="button"
      >
        <Menu width={16} height={16} />
      </button>

      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-[100vh] w-[100vw]  bg-primary/25 px-[20px]
           pt-[36px] md:px-[30px] md:pt-[42px] xl:px-[100px] xl:pt-[30px]"
          onClick={onBackdropClick}
        >
          <div
            className="flex h-[701px] flex-col justify-between
            rounded-[25px] bg-primary/75  p-[24px] md:ml-auto md:w-[320px]
            xl:h-[873px] xl:w-[365px] smOnly:mx-auto smOnly:max-w-[440px]"
          >
            <div>
              <button
                className="anim mb-[8px] flex items-center justify-center text-[20px]
              text-white hover:text-accent focus:text-accent xl:text-[16px]"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                <Close />
                {menuCloseBtnLabel}
              </button>
              <div className="mb-[24px] h-[1px] w-full bg-white" />

              <Navigation
                onClose={() => setIsOpen(false)}
                currentLink={currentLink}
                setCurrentLink={setCurrentLink}
              />
            </div>

            <Socials color="white" className="gap-[8px]" />
          </div>
        </div>
      )}
    </div>
  );
};
