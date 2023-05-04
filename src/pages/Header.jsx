// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function Header() {


  return (
    <header>
      <h1>Welcome to my Portfolio!</h1>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/id/1018/1000/600/" alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1015/1000/600/" alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1019/1000/600/" alt="slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/id/1018/1000/600/" alt="slide 4" />
      </SwiperSlide>
      ...
    </Swiper>

    </header>
  )
}

export default Header