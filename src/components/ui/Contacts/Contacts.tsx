import SocialIcons from '@/components/ui/SocialIcons';
import Call from 'public/icons/call.svg';
import Sms from 'public/icons/sms.svg';
import Map from 'public/icons/map.svg';

const Contacts = () => {
  return (
    <ul className="flex flex-col gap-[24px] md:w-[244px] xl:w-[466px] xl:gap-[32px] smOnly:mb-[24px]">
      <li>
        <p className="mb-[8px] text-[16px] xl:mb-[16px]">Phone:</p>
        <a
          className="group mb-[8px] flex items-center gap-[8px] text-[20px] tracking-[-0.8px] 
          xl:mb-[16px] xl:text-[24px] xl:tracking-[-0.96px]"
          href="tel:office@ecosolution.com"
        >
          <Call
            className="anim h-[20px] w-[20px] group-hover:text-accent
             group-focus:text-accent  xl:h-[24px] xl:w-[24px]"
          />
          38 (098) 12 34 567
        </a>
        <a
          className="group flex items-center gap-[8px] text-[20px] tracking-[-0.8px]  xl:text-[24px] 
          xl:tracking-[-0.96px]"
          href="tel:office@ecosolution.com"
        >
          <Call
            className="anim h-[20px] w-[20px] group-hover:text-accent group-focus:text-accent xl:h-[24px] 
          xl:w-[24px]"
          />
          38 (093) 12 34 567
        </a>
      </li>
      <li>
        <p className="mb-[8px] text-[16px] xl:mb-[16px]">E-mail:</p>
        <a
          className="group flex items-center gap-[8px] text-[20px] tracking-[-0.8px] 
          xl:text-[24px] xl:tracking-[-0.96px]"
          href="mailto:office@ecosolution.com"
        >
          <Sms
            className="anim h-[20px] w-[20px] group-hover:text-accent group-focus:text-accent 
            xl:h-[24px] xl:w-[24px] "
          />
          office@ecosolution.com
        </a>
      </li>
      <li>
        <p className="mb-[8px] text-[16px] xl:mb-[16px]">Address:</p>
        <p
          className="flex items-center gap-[8px] text-[20px] tracking-[-0.8px] xl:text-[24px]
         xl:tracking-[-0.96px]"
        >
          <Map className="h-[20px] w-[20px] xl:h-[24px] xl:w-[24px]" />
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
      </li>
      <li>
        <p className="mb-[8px] text-[16px] xl:mb-[16px]">Social Networks:</p>
        <SocialIcons
          color={'primary'}
          className={'h-[32px] w-[32px] gap-[8px] md:gap-[12px]'}
        />
      </li>
    </ul>
  );
};

export default Contacts;
