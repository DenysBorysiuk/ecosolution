import Image from 'next/image';

const BurgerMenu = () => {
  return (
    <button className="flex items-center justify-center ml-auto rounded-full w-[40px] bg-[#DCEFD8]  hover:bg-[#97D28B]">
      <Image src="/icons/menu.svg" alt="menu-button" width={16} height={16} />
    </button>
  );
};

export default BurgerMenu;
