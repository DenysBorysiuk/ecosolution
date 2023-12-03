'use client';

// import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CasesCard from '@/components/ui/CasesCard';

import 'swiper/css';
import data from '@/data/cases.json';

const CasesSection = () => {
  return (
    <section className="sb section" id="cases">
      <div>
        <h2 className="heading2">Successful cases of our company</h2>
        <button type="button">p</button>
        <button type="button">n</button>
      </div>

      <Swiper
        modules={[Navigation]}
        // navigation={{
        //   nextEl: '.right',
        //   prevEl: '.left',
        // }}
        spaceBetween={24}
        loop={true}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
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
