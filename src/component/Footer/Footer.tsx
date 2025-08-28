import { SocialLinks } from "../../constants/SocialLinks";

const Footer = () => {
  return (
    <>
      <div className="bg-gray">
        <div className="container relative ">
          <hr />
          <div className="py-30 ">
            <div className="grid grid-cols-5 ">
              <div
                className=" flex flex-col justify-self-start
          cursor-pointer    "
              >
                <span className="uppercase text-3xl font-extrabold tracking-wider">
                  MCR
                </span>
                <span className="text-2xl">Construction</span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="font-bold text-2xl">Head Office</div>
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
              <div>
                <div className="font-bold text-2xl">Social</div>
                <div>
                  {SocialLinks.map(({ icons: Icon }, index) => (
                    <div key={index}>
                      <Icon className="text-2xl hover:text-primary-two duration-300 m-1" />
                    </div>
                  ))}
                </div>
                {/* {SocialLinks.map(({ icons: Icons }, index) => (
                    <div key={index}>
                      <Icons si />
                    </div>
                  ))}
                </div> */}
              </div>
              <div>4</div>
              <div>5</div>
            </div>
            <div className="flex justify-between items-center">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
