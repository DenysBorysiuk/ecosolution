import SocialIcons from '@/components/ui/SocialIcons';

const Contacts = () => {
  return (
    <ul className="flex flex-col gap-[24px] md:w-[244px] xl:w-[466px] xl:gap-[32px] smOnly:mb-[24px]">
      <li>
        <p className="text-[16px] tracking-[-0.64px]">Phone:</p>
        <p className="text-[20px] tracking-[-0.8px] xl:text-[24px] xl:tracking-[-0.96px]">
          38 (098) 12 34 567
        </p>
        <p className="text-[20px] tracking-[-0.8px] xl:text-[24px] xl:tracking-[-0.96px]">
          38 (093) 12 34 567
        </p>
      </li>
      <li>
        <p className="text-[16px] tracking-[-0.64px]">E-mail:</p>
        <p className="text-[20px] tracking-[-0.8px] xl:text-[24px] xl:tracking-[-0.96px]">
          office@ecosolution.com
        </p>
      </li>
      <li>
        <p className="text-[16px] tracking-[-0.64px]">Address:</p>
        <p className="text-[20px] tracking-[-0.8px] xl:text-[24px] xl:tracking-[-0.96px]">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
      </li>
      <li>
        <p className="text-[16px] tracking-[-0.64px]">Social Networks:</p>
        <SocialIcons color={'primary'} className={'gap-[8px]'} />
      </li>
    </ul>
  );
};

export default Contacts;
