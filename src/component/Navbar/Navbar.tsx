import { useEffect, useState } from "react";
import { Navlinks } from "../../constants/Navlinks.js";
import { IoClose, IoMenu } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu.js";

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

  return (
    <>
      <nav
        className={`w-full transition-all duration-300 ${
          isFixed
            ? "fixed top-0 left-0 bg-primary/40 shadow-md z-50 "
            : "relative bg-transparent pt-2"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 md:px-6 py-2 ">
          {/* Logo */}
          <div
            className="logo flex flex-col justify-center items-center
            cursor-pointer bg-secondary/70 text-white px-3 border-2 hover:bg-secondary border-primary "
          >
            <span className="uppercase text-2xl font-extrabold tracking-wider">
              MCR
            </span>
            <span>Construction</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-0.5 font-bold">
            <div className="border-2 border-primary">
              <ul className="flex items-center text-1xl cursor-pointer">
                {Navlinks.map((data, index) => (
                  <li
                    key={index}
                    className="w-[100px] py-5 flex justify-center hover:bg-white hover:text-secondary
                      bg-secondary/70 text-white duration-500"
                  >
                    <a className="uppercase" href={data.link}>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-primary h-full flex items-center justify-center border-2
             border-primary px-12 py-3 md:py-5 hover:bg-secondary hover:text-white duration-500"
            >
              <button className="flex items-center justify-center">
                Call Now!
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex text-white z-50 justify-center items-center">
            {showMenu ? (
              <IoClose
                onClick={toggleMenu}
                className="text-5xl duration-500 cursor-pointer"
              />
            ) : (
              <IoMenu
                onClick={toggleMenu}
                className="text-5xl duration-500 cursor-pointer"
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
