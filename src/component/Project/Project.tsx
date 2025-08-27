const Project = () => {
  return (
    <>
      <div className="bg-gray-300 py-40">
        <div className="container">
          <div className="flex  justify-between items-center font-roboto   ">
            <div className="flex flex-col w-[60%] gap-5">
              <span className="text-2xl font-poppins ">What We do</span>
              <span className="text-5xl font-bold text-primary">
                Our Projects
              </span>
              <p className="tracking-normal [word-spacing:0.4rem]">
                I'm a paragraph. Click here to add your own text and edit me.{" "}
                <br />
                I’m a great place for you to tell a story and let your users{" "}
                <br />
                know a little more about you.
              </p>
            </div>
            <div>
              <div>
                <div className="w-[35%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
