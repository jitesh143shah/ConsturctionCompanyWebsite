import { SocialLinks } from "../../constants/SocialLinks";
import { ScrollToTop } from "../imports";
import ResponsiveScrollToTop from "../ScrollToTop/ResponsiveScrollToTop";

const Footer = () => {
  return (
    <>
      <div className="bg-gray">
        <div className="container relative ">
          <hr />
          <div className="py-20 flex flex-col justify-end gap-10">
            <div className="grid grid-cols-5 gap-5 ">
              <div
                className=" flex flex-col justify-self-start items-center
          cursor-pointer    "
              >
                <span className="uppercase sm:text-2xl md:text-3xl font-extrabold tracking-wider">
                  MCR
                </span>
                <span className="sm:text-xl md:text-2xl">Construction</span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="font-bold text-xl md:text-2xl">Head Office</div>
                <div className="flex flex-col capitalize ">
                  <span>500 Terry Francine Street</span>
                  <span>San Francisco, CA 94158</span>
                </div>
                <div className="flex flex-col">
                  <span>123-456-7890</span>
                  <span>
                    <a
                      href="mailto:info@mysite.com"
                      className="hover:text-primary duration-500"
                    >
                      info@mysite.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex gap-5 flex-col ">
                <div className="font-bold text-xl md:text-2xl ">Social</div>

                {SocialLinks.map(({ icons: Icons, name, href }, index) => (
                  <div className="flex gap-50 bg-primary/10 flex-col ">
                    <div
                      key={index}
                      className="  hover:bg-primary duration-500"
                    >
                      <a
                        href={href}
                        target="_blank"
                        className="flex items-center justify-between px-10 gap-5 p-2 group
                         "
                      >
                        <div className="group-hover:text-white capitalize ">
                          {name}
                        </div>
                        <div>
                          <Icons className="h-[25px] w-full text-primary group-hover:text-white " />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <span className="text-xl md:text-2xl font-bold">
                    Inquiries
                  </span>
                </div>
                <span>
                  For any inquiries, questions, or connendations, please call:
                  123-456-7890
                </span>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="flex items-center justify-center px-5 mt-20">
                  <button
                    className="border-1 border-white text-white  bg-primary hover:bg-white
               hover:text-secondary px-15 py-4 duration-500"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span>
                  © 2025 by &nbsp;
                  <span className="text-primary hover:text-black duration-500">
                    MCR Construction{" "}
                  </span>
                  . Powered and secured by{" "}
                  <span className="underline hover:text-primary duration-500">
                    Wix
                  </span>
                </span>
              </div>
              <div className="md:hidden">
                <ResponsiveScrollToTop />
              </div>
              <div className="hidden md:flex underline cursor-pointer">
                <ScrollToTop />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
