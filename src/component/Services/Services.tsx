// import { BsBuildings } from "react-icons/bs";
// import { FaUserAstronaut } from "react-icons/fa";
// import { GiBlackBook, GiBulldozer } from "react-icons/gi";
// import { IoHomeOutline } from "react-icons/io5";
// import { PiShovelBold } from "react-icons/pi";
// import { SlSettings } from "react-icons/sl";
// import { TbBuildingChurch } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ServicesLink } from "../../constants/ServicesLink";

const Services = () => {
  return (
    <>
      <div className="bg-gray py-15 md:py-30 ">
        <div className="container">
          <div
            className="flex  md:justify-between items-start md:items-center  font-roboto
           pb-20 flex-col md:flex-row gap-8 md:gap-0 "
          >
            <div className="flex flex-col gap-5">
              <span className="text-xl md:text-2xl font-poppins ">
                Our Services
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary w-[70%]">
                We Offer a Range of Services to Meet Your Needs
              </span>
              <p className=" w-full  md:w-[80%] text-justify">
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
            </div>
            <div className="md:w-sm">
              <Link to="/servicesreadmore">
                <div
                  className="bg-primary px-10 md:px-8 xl:px-10 py-2 md:py-4 hover:bg-gray border-1
                   border-primary flex flex-col text-center
           hover:border-secondary hover:text-primary duration-500"
                >
                  Read More
                </div>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  justify-center items-center">
              <div className="hidden md:flex"></div>
              {ServicesLink.map(({ title, icons: Icons,link }, index) => (
                <Link
                  to={link}
                  key={index}
                  className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-full h-full    gap-5 bg-amber-50 py-15 md:py-20 px-10 "
                >
                  <Icons
                    className="text-primary text-3xl md:text-6xl font-extralight
                  group-hover:translate-x-20 md:group-hover:translate-x-15
                duration-500 "
                  />
                  <span className="text-xl md:text-2xl text-center">
                    {title}
                  </span>
                </Link>
              ))}

              {/* <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100 w-full h-full    gap-5 bg-amber-50 py-15 md:py-20 px-10 "
              >
                <BsBuildings
                  className="text-primary text-3xl md:text-6xl font-extralight
                  group-hover:translate-x-20 md:group-hover:translate-x-15
                duration-500 "
                />
                <span className="text-xl md:text-2xl text-center">
                  Commercial Construction
                </span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100  w-full h-full  gap-5 bg-amber-50    py-15 md:py-20 px-10"
              >
                <IoHomeOutline
                  className="text-primary text-4xl md:text-6xl font-extralight
                 group-hover:translate-x-20 md:group-hover:translate-x-15 duration-500 "
                />
                <span className="text-xl md:text-2xl text-center ">
                  Residential Construction
                </span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100  w-full h-full   gap-5 bg-amber-50    py-15 md:py-20 px-10"
              >
                <GiBlackBook
                  className="text-primary text-4xl md:text-6xl font-extralight
                 group-hover:translate-x-20 md:group-hover:translate-x-15 duration-500 "
                />
                <span className="text-xl md:text-2xl text-center ">
                  Pre-Construction
                </span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100  w-full h-full  gap-5 bg-amber-50     py-15 md:py-20 px-10"
              >
                <FaUserAstronaut
                  className="text-primary text-4xl md:text-6xl font-extralight
                 group-hover:translate-x-20 md:group-hover:translate-x-15 duration-500 "
                />
                <span className="text-xl md:text-2xl text-center ">
                  Site Management
                </span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100  w-full h-full    gap-5 bg-amber-50     py-15 md:py-20 px-10"
              >
                <TbBuildingChurch
                  className="text-primary text-4xl md:text-6xl font-extralight
                 group-hover:translate-x-20 md:group-hover:translate-x-15 duration-500 "
                />
                <span className="text-xl md:text-2xl text-center ">
                  Special Projects
                </span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100  w-full h-full   gap-5 bg-amber-50  py-15 md:py-20 px-10"
              >
                <GiBulldozer
                  className="text-primary text-4xl md:text-6xl font-extralight
                 group-hover:translate-x-20 md:group-hover:translate-x-15 duration-500 "
                />
                <span className="text-xl md:text-2xl text-center ">
                  Infrastructure Construction
                </span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100  w-full h-full  gap-5 bg-amber-50    py-15 md:py-20 px-10"
              >
                <SlSettings
                  className="text-primary text-4xl md:text-6xl font-extralight
                 group-hover:translate-x-20 md:group-hover:translate-x-15 duration-500 "
                />
                <SlSettings
                  className="text-primary ml-15 md:ml-20 mt-[-40px] md:text-4xl  text-2xl font-extralight
                  group-hover:translate-x-20 md:group-hover:translate-x-15  duration-500 "
                />
                <span className="text-xl md:text-2xl text-center ">
                  Civil Engineering
                </span>
              </div>
              <div
                className="flex group flex-col  duration-500 hover:translate-x-1
               hover:bg-amber-100  w-full h-full   gap-5 bg-amber-50    py-15 md:py-20 px-10"
              >
                <PiShovelBold
                  className="text-primary text-4xl md:text-6xl font-extralight
                 group-hover:translate-x-20 md:group-hover:translate-x-15 duration-500 "
                />
                <span className="text-xl md:text-2xl text-center ">
                  Landscape Construction
                </span>
              </div>
              <div className="hidden md:flex"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
