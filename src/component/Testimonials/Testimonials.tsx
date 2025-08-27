import { bridge, building, construction, foundation } from "../../images";

const Testimonials = () => {
  return (
    <>
      <div className="bg-gray  ">
        <div className="container">
          <div>
            <div className="flex  justify-between items-center font-roboto py-20  ">
              <div className="flex flex-col gap-5">
                <span className="text-2xl font-poppins ">
                  Building Is What We Do
                </span>
                <span className="text-5xl font-bold text-primary">
                  MCR Construction Is <br /> Leading Quality Projects
                </span>
              </div>
              <div>
                <div
                  className="bg-primary py-4 px-15 hover:bg-gray border-1 border-primary
           hover:border-secondary hover:text-secondary duration-500"
                >
                  Read More
                </div>
              </div>
            </div>

            <div className="">
              <div className="py-20">
                <div className="grid grid-cols-2 gap-10 ">
                  <div className="flex flex-col gap-3 justify-center">
                    <hr className="w-10" />
                    <span className="text-2xl font-bold">Commercial</span>
                    <p className="text-justify mt-6">
                      I'm a paragraph. Click here to add your own text and edit
                      me. It's easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font. Feel
                      free to drag and drop me anywhere you like on your page.
                      This is a great space to write a long text about your
                      company and your services. You can use this space to go
                      into a little more detail about your company. Talk about
                      your team and what services you provide. Tell your
                      visitors the story of how you came up with the idea for
                      your business and what makes you different from your
                      competitors.
                    </p>
                  </div>
                  <div>
                    <img src={building} alt="Building" className="w-full " />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="py-20 ">
                <div className="grid grid-cols-2 gap-10  ">
                  <div className="relative ">
                    {/* <div className="   w-full ">
                      <img
                        src={bridge}
                        alt="Building"
                        className="  h-[500px] w-full bg-fixed bg-center bg-cover   "
                      />
                    </div> */}
                    <div
                      className="h-[1000px] w-full bg-fixed bg-center bg-cover
                      bg-no-repeat "
                      style={{ backgroundImage: `url(${bridge}) ` }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <hr className="w-10" />
                    <span className="text-2xl font-bold">Infrastructure</span>
                    <p className="text-justify mt-6">
                      I'm a paragraph. Click here to add your own text and edit
                      me. It's easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font. Feel
                      free to drag and drop me anywhere you like on your page.
                      This is a great space to write a long text about your
                      company and your services. You can use this space to go
                      into a little more detail about your company. Talk about
                      your team and what services you provide. Tell your
                      visitors the story of how you came up with the idea for
                      your business and what makes you different from your
                      competitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-50">
                <div className="grid grid-cols-2 gap-10 ">
                  <div>
                    <img src={foundation} alt="Building" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <hr className="w-10" />
                    <span className="text-2xl font-bold">Residential</span>
                    <div>
                      <img
                        src={construction}
                        alt="Construction"
                        className="h-[60vh] w-[100%]"
                      />
                    </div>

                    <p className="text-justify mt-6">
                      I'm a paragraph. Click here to add your own text and edit
                      me. It's easy. Just click “Edit Text” or double click me
                      to add your own content and make changes to the font. Feel
                      free to drag and drop me anywhere you like on your page.
                      This is a great space to write a long text about your
                      company and your services. You can use this space to go
                      into a little more detail about your company. Talk about
                      your team and what services you provide. Tell your
                      visitors the story of how you came up with the idea for
                      your business and what makes you different from your
                      competitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
