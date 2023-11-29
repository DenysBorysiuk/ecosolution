import Image from 'next/image';

const BurgerMenu = () => {
  return (
    <button className="rounded-full w-[40px] bg-[#DCEFD8] flex items-center justify-center ml-auto">
      <Image src="/icons/menu.svg" alt="menu-button" width={16} height={16} />
    </button>
  );
};

export default BurgerMenu;
