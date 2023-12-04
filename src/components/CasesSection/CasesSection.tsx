'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import CasesCard from '@/components/ui/CasesCard';
import Arrow from 'public/icons/arrow-xxl.svg';
import 'swiper/swiper-bundle.css';
import data from '@/data/cases.json';

const CasesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const slides = isMobile ? 1 : 2;

  return (
    <section className="section" id="cases">
      <div className="line relative mb-[24px] md:mb-[36px] md:flex ">
        <h2 className="heading2 w-[320px] md:mr-[100px] md:w-[264px] xl:mr-[383px] xl:w-[396px] smOnly:mb-[24px]">
          Successful cases of our company
        </h2>
        <div className="flex grow items-end justify-between">
          <div>
            <span className="text-[28px] font-light">0{currentSlide + 1}</span>
            <span className="text-[28px] font-light text-primary/25">/05</span>
          </div>
          <div className="flex gap-[12px] xl:gap-[24px]">
            <button
              className="button-prev icon anim h-[66px] w-[66px] border border-primary
              hover:border-accent hover:text-accent"
              type="button"
              arial-label="to show previous slide"
            >
              <Arrow />
            </button>
            <button
              className="button-next icon anim h-[66px] w-[66px] rotate-180 border
               border-primary hover:border-accent hover:text-accent"
              type="button"
              arial-label="to show next slide"
            >
              <Arrow />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        spaceBetween={24}
        loop={true}
        slidesPerView={slides}
        onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
      >
        {data.cards.map(({ title, img, text, date }) => (
          <SwiperSlide key={title}>
            <CasesCard img={img} title={title} text={text} date={date} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CasesSection;
