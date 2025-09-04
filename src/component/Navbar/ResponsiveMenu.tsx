import { Navlinks } from "../../constants/Navlinks";

const ResponsiveMenu = ({ showMenu }: { showMenu: boolean }) => {
  return (
    <>
      <div>
        <div
          className={`md:hidden
           fixed h-screen w-[75%] bg-gray-600
           flex flex-col justify-between px-8 py-6 pt-16 z-50
           duration-500 transition-all ease-in-out
           ${showMenu ? "top-0 left-0" : "-top-full -left-[100%]"}
            `}
        >
          <div
            className="logo flex flex-col justify-center items-center absolute top-8 left-6
            cursor-pointer bg-secondary/70 text-white px-3 py-1 border-2 hover:bg-secondary border-primary "
          >
            <span className="uppercase text-1xl font-extrabold tracking-wider">
              MCR
            </span>
            <span>Construction</span>
          </div>
          <div className=" flex justify-between flex-col gap-5 pt-20">
            {Navlinks.map((data) => (
              <ul className=" flex flex-col items-center capitalize text-1xl text-white">
                <li key={data.id}>
                  <a href={data.link} target="_blank">
                    {data.name}
                  </a>
                </li>
              </ul>
            ))}
            <div className="flex items-center justify-center px-5 mt-10">
              <button
                className="border-2 border-primary text-white   bg-primary hover:bg-white
               hover:text-secondary px-8 py-4 duration-500 rounded-xl"
              >
                <a href="contact" target="_blank">
                  Contact Us
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
