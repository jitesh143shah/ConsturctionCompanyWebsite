import { useState } from "react";
import { Navlinks } from "../../constants/Navlinks.js";
import { IoClose, IoMenu } from "react-icons/io5";
import ResponsiveMenu from "./ResponsiveMenu.js";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="z-50 container   ">
        <nav className=" flex  justify-between pt-10">
          <div
            className="logo flex flex-col justify-center items-center
          cursor-pointer bg-secondary/70 text-white px-5 border-2 hover:bg-secondary border-primary "
          >
            <span className="uppercase text-2xl font-extrabold tracking-wider">
              MCR
            </span>
            <span>Construction</span>
          </div>
          <div className=" hidden  md:flex items-center justify-center  gap-0.5  font-bold  ">
            <div className="border-2 border-primary">
              {/* <ul className="flex items-center text-1xl  cursor-pointer ">
                  <li
                    className="w-full h-full p-5 hover:bg-white hover:text-secondary
                  bg-secondary/70 text-white  duration-500 "
                  >
                    <a href="#">Services</a>
                  </li>
                  <li
                    className="w-full h-full p-5 hover:bg-white hover:text-secondary
            bg-secondary/70 text-white duration-500 "
                  >
                    <a href="#">Project</a>
                  </li>
                  <li
                    className="w-full h-full p-5 hover:bg-white hover:text-secondary
             bg-secondary/70  text-white duration-500 "
                  >
                    <a href="#">About </a>
                  </li>
                  <li
                    className="w-full h-full p-5 hover:bg-white hover:text-secondary
            bg-secondary/70 text-white  duration-500"
                  >
                    <a href="#">Careers</a>
                  </li>
                  <li
                    className="w-full h-full p-5 hover:bg-white hover:text-secondary
              bg-secondary/70 text-white  duration-500"
                  >
                    <a href="#">Contact</a>
                  </li>
                </ul> */}
              <ul className="flex items-center  text-1xl  cursor-pointer ">
                {Navlinks.map((data) => (
                  <li
                    className="w-[100px] h-full py-5 px-2 hover:bg-white hover:text-secondary
                      bg-secondary/70 text-white  duration-500"
                  >
                    <a className="uppercase " href={data.link}>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-primary h-full w-full flex items-center justify-center border-2
             border-primary px-12 hover:bg-secondary
                 hover:text-white duration-500"
            >
              <button className=" flex items-center w-full h-full justify-center   ">
                Call Now!
              </button>
            </div>
          </div>
        </nav>
        <ResponsiveMenu showMenu={showMenu} />
        <div className=" md:hidden flex text-primary pr-20 z-10 fixed top-10 right-0">
          {showMenu ? (
            <IoClose
              onClick={toogleMenu}
              className="  text-6xl flex justify-center items-center duration-500"
            />
          ) : (
            <IoMenu
              onClick={toogleMenu}
              className="text-6xl flex justify-center items-center duration-500"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
