// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "../../App.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import { building } from "../../images";
import { ImagesLinks } from "../../constants/ImagesLinks";

const Project = () => {
  return (
    <>
      <div className="bg-gray-300 py-20  md:py-40">
        <div className="container">
          <div className="flex justify-between items-center font-roboto">
            <div className="flex flex-col gap-5">
              <span className="text-xl md:text-2xl font-poppins">
                What We do
              </span>
              <span className="text-3xl md:text-5xl font-bold text-primary">
                Our Projects
              </span>
              <p className="tracking-normal w-full md:w-[70%] text-justify">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>
          {/* Swiper */}
          <div className="mt-10 ">
            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              cssMode={true}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 15 }, // small screens
                768: { slidesPerView: 2, spaceBetween: 20 }, // tablets
                1024: { slidesPerView: 3, spaceBetween: 25 }, // desktop
              }}
              // slidesPerView={3}
              // spaceBetween={20}
              mousewheel={true}
              keyboard={true}
              className="mySwiper"
            >
              {ImagesLinks.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="relative group w-full h-[400px] overflow-hidden">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-full object-cover group-hover:scale-111 duration-900 -z-10"
                    />

                    <div
                      className="absolute top-1/2 left-1/2
                   -translate-x-1/2 -translate-y-1/2
                   opacity-0 group-hover:opacity-100
                   bg-gray-800 text-white text-3xl font-bold
                   px-6 py-3 rounded-lg transition-all duration-900"
                    >
                      {data.name}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
