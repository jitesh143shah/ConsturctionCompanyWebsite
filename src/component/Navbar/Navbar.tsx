import { Navlinks } from "../../constants/Navlinks.js";

const Navbar = () => {
  return (
    <>
      <div className="z-50 container   ">
        <div className="  ">
          <div className="flex  justify-between pt-10">
            <div
              className="logo flex flex-col justify-center items-center
          cursor-pointer bg-secondary/70 text-white px-5 border-2 hover:bg-secondary border-primary "
            >
              <span className="uppercase text-2xl font-extrabold tracking-wider">
                MCR
              </span>
              <span>Construction</span>
            </div>
            <div className=" flex items-center justify-center  gap-0.5  font-bold  ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
