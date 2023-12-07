import Arrow from 'public/icons/arrow-xl.svg';
import { CasesCardProps } from './type';

const CasesCard = ({ img, title, text, date }: CasesCardProps) => {
  return (
    <div className="h-[318px] md:h-[322px] md:w-[342px] xl:h-[506px] xl:w-[596px] ">
      <div className="h-[168px]  xl:h-[296px]">
        <picture>
          <source
            srcSet={`
                /images/cases/${img}_lg@1x.webp 1x,
                /images/cases/${img}_lg@2x.webp 2x
  `}
            type="image/webp"
          />
          <img
            className="h-full w-full object-cover"
            src={`/images/cases/${img}_lg@1x.webp`}
            alt={text}
            loading="lazy"
          />
        </picture>
      </div>
      <div className="bg-form_bg px-[12px] pb-[12px] pt-[24px] xl:px-[48px] xl:py-[36px]">
        <div className="mb-[24px] flex justify-between md:mb-[22px] xl:mb-[36px]">
          <p
            className="h-[66px] w-[175px] text-[18px] tracking-[-0.72px] 
          md:h-[72px] md:w-[230px] md:text-[20px] xl:w-[357px] xl:text-[24px]"
          >
            {title}
          </p>
          <a
            href="#"
            aria-label={`Read more about ${title}`}
            className="anim icon block h-[60px] w-[60px] bg-accent hover:bg-primary
             hover:text-accent"
          >
            <Arrow />
          </a>
        </div>
        <div className="flex justify-between border-t border-accent pt-[12px] xl:pt-[24px]">
          <p className="text-[12px] md:text-[14px]">{text}</p>
          <p className="text-[12px] md:text-[14px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CasesCard;
