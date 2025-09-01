import CountUp from "react-countup";
import { worker } from "../../images";
import { useState } from "react";
// import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  const [finished, setFinished] = useState(false);
  // const [counterStart, setCounterStart] = useState<boolean>(false);
  return (
    <>
      <div className="relative ">
        <div
          className="h-full w-full bg-fixed bg-cover bg-no-repeat absolute -z-5"
          style={{ backgroundImage: `url(${worker})` }}
        >
          {/* <img
            src={worker}
            alt=""
            className=" top-0 left-0 w-full h-full z-[-50] absolute"
          /> */}
        </div>
        <div className="bg-black/40 py-30 md:py-40 -z-10 ">
          <div className="container text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr]  gap-10">
              <div className="flex   items-center justify-center     ">
                <div className="flex flex-col gap-10 md:gap-15">
                  <div className="grid grid-cols-1  ">
                    <div className="flex flex-col gap-5">
                      <span className="text-xl md:text-2xl font-bold capitalize">
                        Who We Are
                      </span>
                      <span className="text-3xl md:text-5xl font-bold text-primary capitalize">
                        About Our Company
                      </span>
                      <p className=" text-justify w-[70%]">
                        I'm a paragraph. Click here to add your own text and
                        edit me. It's easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. I'm a great place for you to tell a story and let
                        your users know more about you.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                    {/* <ScrollTrigger
                      onEnter={() => setCounterStart(true)}
                      onExit={() => setCounterStart(false)}
                    >
                      <div className="flex flex-col gap-3 ">
                        <span className="text-4xl md:text-6xl font-bold flex">
                          {counterStart && (
                            <CountUp
                              start={0}
                              end={1998}
                              delay={0}
                              duration={2}
                            />
                          )}
                          {finished && "+"}
                        </span>
                        <span className="capitalize">
                          {" "}
                          Year of Establishment
                        </span>
                        <hr className="w-15" />
                      </div>{" "}
                    </ScrollTrigger> */}
                    <div className="flex flex-col gap-3 ">
                      <span className="text-4xl md:text-6xl font-bold flex">
                        <CountUp
                          start={0}
                          end={1998}
                          delay={0}
                          duration={2}
                          onEnd={() => setFinished(true)}
                        />

                        {finished && "+"}
                      </span>
                      <span className="capitalize"> Year of Establishment</span>
                      <hr className="w-15" />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <span className="text-4xl md:text-6xl  font-bold flex">
                        <CountUp
                          start={0}
                          end={335}
                          delay={0}
                          duration={2}
                          onEnd={() => setFinished(true)}
                        />
                        {finished && "+"}
                      </span>
                      <span className="capitalize">Projects Completed</span>
                      <hr className="w-15" />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <span className="text-4xl md:text-6xl font-bold flex">
                        <CountUp
                          start={0}
                          end={150}
                          delay={0}
                          duration={2}
                          onEnd={() => setFinished(true)}
                        />
                        {finished && "+"}
                      </span>
                      <span className="capitalize">Professional Employees</span>
                      <hr className="w-15" />
                    </div>
                    <div className="flex flex-col gap-3 ">
                      <span className="text-4xl md:text-6xl font-bold flex">
                        <CountUp
                          start={0}
                          end={35}
                          delay={0}
                          duration={2}
                          onEnd={() => setFinished(true)}
                        />
                        {finished && "+"}
                      </span>
                      <span className="capitalize">Business Partners</span>
                      <hr className="w-15 " />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center justify-center ">
                      <span className="font-cursive text-3xl md:text-5xl italic font-extralight">
                        A.Masterson
                      </span>
                      <span className=" font-bold text-xl md:text-2xl">
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
