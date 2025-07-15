import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

 
const Home = () => {
  return (
    <div className="relative pt-20 w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <img src="/1.jpg" className="w-full  object-cover" alt="Slide 1" />

        </SwiperSlide>
        <SwiperSlide>
          <img src="/2.jpg" className="w-full  object-cover" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/3.jpg" className="w-full  object-cover" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="absolute bottom-20 w-full text-center text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
      </motion.div>
    </div>
  );
};

export default Home;