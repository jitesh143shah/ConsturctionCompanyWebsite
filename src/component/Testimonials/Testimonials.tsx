import { bridge, building, construction, foundation } from "../../images";

const Testimonials = () => {
  return (
    <>
      <div className="bg-gray  ">
        <div className="container">
          <div>
            <div
              className="flex flex-col md:flex-row md:justify-between
             md:items-center gap-10 font-roboto py-10 md:py-20  "
            >
              <div className="flex flex-col gap-5">
                <span className="text-xl md:text-2xl font-poppins capitalize ">
                  Building Is What We Do
                </span>
                <span className="text-3xl md:text-5xl capitalize w-[80%] font-bold text-primary ">
                  MCR Construction Is Leading Quality Projects
                </span>
              </div>
              <div>
                <div
                  className="bg-primary px-8 md:px-15 py-2 md:py-4 hover:bg-gray border-1
                   border-primary w-1/2 md:w-full flex  justify-center
           hover:border-secondary hover:text-secondary duration-500 "
                >
                  Read More
                </div>
              </div>
            </div>

            <div className="">
              <div className=" py-5 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                  <div className="flex flex-col gap-8 justify-center">
                    <hr className="w-15" />
                    <span className="text-2xl font-bold capitalize">
                      Commercial
                    </span>
                    <p className="text-jus mt-6  space-y-5 flex flex-col">
                      <span className="text-justify">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It's easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Feel free to drag and drop me anywhere you like on
                        your page.
                      </span>

                      <span className="text-justify">
                        This is a great space to write a long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors.
                      </span>
                      <span className="text-justify">
                        This is a great space to write a long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img
                      src={building}
                      alt="Building"
                      className="object-cover h-[400px] md:h-full w-full "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className=" py-5 md:py-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
                  <div className="w-full bg-cover ">
                    {/* <div className="   w-full ">
                      <img
                        src={bridge}
                        alt="Building"
                        className="  h-[500px] w-full bg-fixed bg-center bg-cover   "
                      />
                    </div> */}
                    <div
                      className="h-[400px] md:h-[1000px]  bg-fixed bg-center bg-cover
                      bg-no-repeat "
                      style={{ backgroundImage: `url(${bridge}) ` }}
                    ></div>
                  </div>
                  <div className="flex flex-col gap-8 justify-center">
                    <hr className="w-15" />
                    <span className="text-2xl font-bold capitalize">
                      Infrastructure
                    </span>
                    <p className="text-justify mt-6 space-y-5  flex flex-col ">
                      <span className="text-justify">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It's easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Feel free to drag and drop me anywhere you like on
                        your page.
                      </span>

                      <span className="text-justify">
                        This is a great space to write a long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors.
                      </span>
                      <span className="text-justify">
                        This is a great space to write a long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-5 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                  <div>
                    <img
                      src={foundation}
                      alt="Building"
                      className="w-full h-[400px] md:h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-8 justify-center">
                    <hr className="w-15" />
                    <span className="text-2xl font-bold capitalize">
                      Residential
                    </span>
                    <div>
                      <img
                        src={construction}
                        alt="Construction"
                        className="object-cover w-[100%] h-[400px] md:h-full  "
                      />
                    </div>

                    <p className=" mt-6  space-y-5 flex flex-col ">
                      <span className="text-justify">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It's easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Feel free to drag and drop me anywhere you like on
                        your page.
                      </span>

                      <span className="text-justify">
                        This is a great space to write a long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors.
                      </span>
                      <span className="text-justify">
                        This is a great space to write a long text about your
                        company and your services. You can use this space to go
                        into a little more detail about your company. Talk about
                        your team and what services you provide. Tell your
                        visitors the story of how you came up with the idea for
                        your business and what makes you different from your
                        competitors.
                      </span>
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
