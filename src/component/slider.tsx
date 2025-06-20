"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const VideoSlider = () => {
  const videos = [
    "https://www.youtube.com/embed/55ofa0khiCU?si=jHX_eC43XnqJ4vhV",
    "https://www.youtube.com/embed/joiaAc6Em6A?si=AuHyFnFGZZUtrxO3",
  ];

  return (
    <section className="w-full py-10 bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-50 text-black">
      <h2 className="text-2xl font-bold text-center mb-8">Video Showcase</h2>
      <div className="w-[90%] max-w-[800px] mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
        >
          {videos.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full aspect-video">
                <iframe
                  src={src}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSlider;
