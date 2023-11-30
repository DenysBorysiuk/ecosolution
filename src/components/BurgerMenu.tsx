import Image from 'next/image';

const BurgerMenu = () => {
  return (
    <button className="ml-auto flex w-[40px] items-center justify-center rounded-full bg-[#DCEFD8]  hover:bg-[#97D28B]">
      <Image src="/icons/menu.svg" alt="menu-button" width={16} height={16} />
    </button>
  );
};

export default BurgerMenu;
