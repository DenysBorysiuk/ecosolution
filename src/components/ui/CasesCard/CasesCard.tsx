import Arrow from 'public/icons/arrow-xl.svg';

type CasesCardProps = {
  img: string;
  title: string;
  text: string;
  date: string;
};

const CasesCard = ({ img, title, text, date }: CasesCardProps) => {
  return (
    <div className="h-[318px] md:h-[322px] md:w-[342px] xl:h-[506px] xl:w-[596px] ">
      <div className="h-[168px]  xl:h-[296px]">
        <img src={img} alt={text} className="block h-[100%] w-full" />
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
            className="anim icon block h-[60px] w-[60px] bg-accent hover:bg-primary hover:text-accent"
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
