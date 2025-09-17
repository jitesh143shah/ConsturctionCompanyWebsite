import { useEffect, useState } from "react";
import { Navlinks } from "../../constants/Navlinks.js";
import { IoClose, IoMenu } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu.js";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When scrolled more than 50px, make navbar fixed
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { pathname } = useLocation();

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          isFixed
            ? "fixed top-0 left-0 bg-black md:bg-black/0 shadow-md md:shadow-none z-50 "
            : "relative bg-transarent  "
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 md:px-6 py-2 ">
          <Link
            to="/"
            className="logo flex flex-col  justify-center items-center text-center h-fit py-1
            cursor-pointer bg-secondary/70 text-white  md:px-3 px-1 border-2 hover:bg-secondary border-primary "
          >
            <span className="uppercase text-1xl md:text-2xl font-extrabold tracking-wider w-full">
              MCR
            </span>
            <span>Construction</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5 font-bold">
            <div className="border-2 border-primary">
              <ul className="flex items-center text-1xl cursor-pointer">
                {Navlinks.map((data, index) => (
                  <Link className="uppercase" to={data.link} target="">
                    <li
                      key={index}
                      // className="w-[100px] py-5 flex justify-center hover:bg-white hover:text-secondary
                      // bg-secondary/70 text-white duration-500"
                      className={`px-4 py-2 transition duration-300 ${
                        pathname === data.link
                          ? "  bg-primary  py-5  flex justify-center hover:bg-white hover:text-secondary  text-white duration-500 " // active link
                          : " py-5 flex justify-center hover:bg-white hover:text-secondary bg-secondary/70 text-white duration-500"
                      }`}
                    >
                      {data.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            <Link to="https://web.whatsapp.com/" target="_blank">
              <div
                className="bg-primary h-full flex items-center justify-center border-2
             border-primary md:px-5 lg:px-12 py-3 md:py-5 hover:bg-secondary hover:text-white duration-500"
              >
                <button className="flex items-center justify-center">
                  Call Now!
                </button>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex text-primary z-50 justify-center items-center">
            {showMenu ? (
              <IoClose
                onClick={toggleMenu}
                className="text-3xl md:text-5xl duration-500 cursor-pointer"
              />
            ) : (
              <IoMenu
                onClick={toggleMenu}
                className="text-3xl md:text-5xl duration-500 cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
