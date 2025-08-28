import {
  akeofit,
  bronfman,
  demotive,
  latch,
  nest,
  oweer,
  right,
  shawns,
  tocket,
} from "../../images";

const Client = () => {
  return (
    <>
      <div className="container">
        <div className="pt-20 pb-10">
          <div className="flex flex-col items-center gap-8 ">
            <span className="text-3xl">Our Clients</span>
            <span className="text-5xl text-primary font-bold text-center">
              We believe each client is a <br /> long term partnership
            </span>
          </div>
          <div className="grid grid-cols-5 gap-4 py-20">
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={akeofit}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={bronfman}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={tocket}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={shawns}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={latch}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={akeofit}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={right}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={demotive}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={oweer}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>{" "}
            <div className="overflow-hidden  rounded-2xl">
              <div className="bg-gray-200 h-full w-full  group">
                <img
                  src={nest}
                  alt="okrmrn"
                  className="group-hover:bg-red-100 group-hover:scale-200 duration-500
               5 w-full h-full py-30 px-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
