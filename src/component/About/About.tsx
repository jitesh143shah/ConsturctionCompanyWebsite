import { worker } from "../../images";

const About = () => {
  return (
    <>
      <div className="relative">
        <div
          className="h-full w-full bg-fixed bg-cover bg-no-repeat absolute z-[-10]"
          style={{ backgroundImage: `url(${worker})` }}
        >
          {/* <img
            src={worker}
            alt=""
            className=" top-0 left-0 w-full h-full z-[-50] absolute"
          /> */}
        </div>
        <div className="bg-black/40 py-50 ">
          <div className="container text-white">
            <div className="grid grid-cols-[2fr_1fr]  gap-10">
              <div className="flex   items-center justify-center     ">
                <div className="flex flex-col gap-25">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
                    <div className="flex flex-col gap-5">
                      <span className="text-2xl font-bold">Who We Are</span>
                      <span className="text-3xl font-bold text-primary">
                        About Our Company
                      </span>
                      <p className="font-roboto leading-loose">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It's easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. I'm a great place for you to tell a story and let
                        your users know more about you.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5">
                    <div className="flex flex-col gap-3 ">
                      <span className="text-6xl font-bold">1968</span>
                      <span>Year of Establishment</span>
                      <hr className="w-15" />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <span className="text-6xl font-bold">282</span>
                      <span>Projects Completed</span>
                      <hr className="w-15" />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <span className="text-6xl font-bold">150</span>
                      <span>Professional Employees</span>
                      <hr className="w-15" />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <span className="text-6xl font-bold">35</span>
                      <span>Business Partners</span>
                      <hr className="w-15 " />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-center justify-center ">
                      <span className="font-cursive text-5xl italic font-extralight">
                        A.Masterson
                      </span>
                      <span className=" font-bold text-2xl">
                        Aaron Masterson
                      </span>
                      <span>CEO, MCR Construction</span>
                    </div>
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

export default About;
