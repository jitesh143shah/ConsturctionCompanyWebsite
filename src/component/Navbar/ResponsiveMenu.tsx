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
          <div className=" flex justify-between flex-col gap-5">
            {Navlinks.map((data) => (
              <ul className=" flex flex-col items-center capitalize text-3xl text-white">
                <li key={data.id}>
                  <a href="">{data.name}</a>
                </li>
              </ul>
            ))}
            <div className="flex items-center justify-center px-5 mt-20">
              <button
                className="border-2 border-primary text-white   bg-primary hover:bg-white
               hover:text-secondary px-15 py-4 duration-500"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
