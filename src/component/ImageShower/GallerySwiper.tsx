import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "../../App.css";

// import required modules

// import { building } from "../../images";
import { ImagesLinks } from "../../constants/ImagesLinks";
import { useState } from "react";

export default function GallerySwiper() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full">
      {/* GALLERY MODE */}
      {!selectedImage && (
        <Swiper slidesPerView={1} spaceBetween={20}>
          {ImagesLinks.map((data) => (
            <SwiperSlide key={data.id}>
              <div
                className="relative group w-full h-[500px] cursor-pointer"
                onClick={() => setSelectedImage(data)}
              >
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover group-hover:hidden"
                />
                <div
                  className="absolute top-1/2 left-1/2
                             -translate-x-1/2 -translate-y-1/2
                             opacity-0 group-hover:opacity-100
                             bg-gray-800 text-white text-3xl font-bold
                             px-6 py-3 rounded-lg transition-all duration-300"
                >
                  {data.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      DETAIL MODE
      {selectedImage && (
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 p-6">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            ✕ Close
          </button>

          {/* Left: Swiper for image */}
          <div className="w-full md:w-1/2 h-[400px]">
            <Swiper slidesPerView={1}>
              <SwiperSlide>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.name}
                  className=" rounded-xl shadow-md"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Right: Text Details */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">{selectedImage.name}</h2>
            <p className="text-lg text-gray-700">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
