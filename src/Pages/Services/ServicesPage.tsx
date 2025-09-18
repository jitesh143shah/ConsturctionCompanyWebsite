import { FaArrowDown } from "react-icons/fa";
import { Footer, Navbar } from "../../component/imports";
import { building, construction } from "../../images";
import { Link } from "react-router-dom";
import { ServicesLink } from "../../constants/ServicesLink";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="mb-5">
        <h1
          className="capitalize text-center text-3xl md:text-4xl lg:text-7xl font-bold pb-12
            bg-fixed bg-center bg-cover h-[400px] justify-center flex items-center rounded-b-[15%] 
            text-white         duration-500             bg-no-repeat 
             "
          style={{ backgroundImage: `url(${building})  ` }}
        >
          <div className="flex items-center justify-center group hover:underline duration-500 gap-5 hover:text-primary">
            <span className=" "> Our Services</span>
            <span className="group-hover:translate-y-15 duration-500 text-2xl md:text-4xl xl:text-5xl">
              <FaArrowDown />
            </span>
          </div>
        </h1>
      </div>

      <div>
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
              <div className="md:w-sm"></div>
            </div>
            <div className="">
              <div className="hidden md:flex"></div>
              <div className=" grid grid-cols-1  container py-10">
                {ServicesLink.map(
                  (
                    { title, icons: Icons, link, image, description },
                    index
                  ) => (
                    <div key={index}>
                      <Link to={link}>
                        <div className="grid grid-cols-1  md:grid-cols-2 items-center gap-6">
                          {/* If index is even → text first, else → image first */}
                          {index % 2 === 0 ? (
                            <>
                              {/* Content */}
                              <div className="flex flex-col gap-5 py-3  group">
                                <span className="group-hover:translate-x-5 
                                 group-hover:text-5xl duration-700 block hover:underline group-hover:text-primary">
                                  <Icons />
                                </span>
                                <span className="duration-500 group-hover:translate-x-5 block hover:underline group-hover:text-primary">
                                  {title}
                                </span>
                                <span className="text-justify md:w-[70%]">
                                  {description}
                                </span>
                              </div>

                              {/* Image */}
                              <div>
                                <img
                                  src={image}
                                  alt={title}
                                  className="rounded-lg shadow-md"
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              {/* Image first */}
                              <div>
                                <img
                                  src={image}
                                  alt={title}
                                  className="rounded-lg shadow-md"
                                />
                              </div>

                              {/* Content second */}
                              <div className="flex flex-col  gap-5 py-3  group">
                                <span className="group-hover:translate-x-5 
                                 group-hover:text-5xl duration-700 block hover:underline group-hover:text-primary">
                                  <Icons />
                                </span>
                                <span className="duration-500 group-hover:translate-x-5 block hover:underline group-hover:text-primary">
                                  {title}
                                </span>
                                <span>{description}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </Link>
                    </div>
                  )
                )}
              </div>
              <div className="hidden">
                <img
                  src={construction}
                  alt={construction}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;
