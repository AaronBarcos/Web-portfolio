// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from "swiper/core";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation]);

function Header() {
  return (
    <header>
      <h1>Welcome to my Portfolio!</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: "button-prev",
          nextEl: "button-next",
        }}
      >
        <SwiperSlide>
          <Link to="/aboutme" alt="slide 1">
            About me
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/technologies" alt="slide 2">
            Technologies
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/projects" alt="slide 3">
            My projects
          </Link>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="button-prev">Ant</div>
        <div className="button-next">Desp</div>
      </div>
    </header>
  );
}

export default Header;
