import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../component/imports";
import { ServicesLink } from "../../constants/ServicesLink";
import { construction } from "../../images";

const ServicesReadmore = () => {
  return (
    <>
      <Navbar />
      <div className="  grid  grid-cols-1 md:grid-cols-2 container py-10">
        <div className="py-15 flex flex-col justify-center text-xl md:text-3xl ">
          {ServicesLink.map(({ title, icons: Icons, link }, index) => (
            <div className="flex">
              <Link to={link}>
                <div
                  key={index}
                  className="flex gap-5 py-3 hover:underline hover:text-primary group   "
                >
                  <span className=" group-hover:scale-125 duration-500">
                    <Icons />
                  </span>
                  <span className=" duration-500 hover:translate-x-5">
                    {" "}
                    {title}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <img
            src={construction}
            alt={construction}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesReadmore;
