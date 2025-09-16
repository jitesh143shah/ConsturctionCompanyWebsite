import { Link } from "react-router-dom";
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
              <div
                className="logo flex flex-col justify-center items-center h-fit w-fit
                 cursor-pointer bg-secondary/70 text-white px-3  py-1 border-2 duration-500
                  hover:bg-secondary border-primary "
              >
                <span className="uppercase text-xl ">MCR</span>
                <span>Construction</span>
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
                    <Link
                      to="mailto:info@mysite.com"
                      className="hover:text-primary duration-500"
                    >
                      info@mysite.com
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex gap-5 flex-col ">
                <div className="font-bold text-xl md:text-2xl ">Social</div>

                {SocialLinks.map(
                  ({ icons: Icons, name, href, color }, index) => (
                    <div className="flex gap-50 bg-primary/10 flex-col  ">
                      <div
                        key={index}
                        className="  hover:bg-primary duration-500"
                      >
                        <Link
                          to={href}
                          target="_blank"
                          className="flex items-center justify-between px-10 gap-5 p-2 group
                         "
                        >
                          <div className="group-hover:text-white capitalize ">
                            {name}
                          </div>
                          <div>
                            <Icons
                              style={{ color: color }} // must be an object
                              className="h-[25px] w-full group-hover:text-white"
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                )}
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
                <div className="flex items-center justify-center px-15 sm:px-20 md:px-0 ">
                  <Link
                    to="/contact"
                    className="border-1 border-white text-white  bg-primary hover:bg-white
               hover:text-secondary px-5 sm:px-12 py-2 md:py-4 duration-500 w-full text-center"
                  >
                    <button className="cursor-pointer">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <span className="text-center">
                  © <span> {new Date().getFullYear()}</span> by &nbsp;
                  <span className="text-primary hover:text-black duration-500">
                    MCR Construction
                  </span>
                  . Powered and secured by &nbsp;
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
