import { Footer, Navbar, Project } from "../../component/imports";
import { ImagesLinks } from "../../constants/ImagesLinks";

const ProjectPage = () => {
  return (
    <>
      <Navbar />
      <Project />
      <div className="py-5 grid grid-cols-3 items-center justify-center  gap-5  container ">
        {ImagesLinks.map((data) => (
          <div
            className="bg-primary/50 flex flex-col items-center gap-5 hover:bg-primary/80
           group rounded-2xl duration-500 hover:text-white"
          >
            <img
              src={data.image}
              alt={data.name}
              className="  h-[300px] object-cover w-xl items-center group-hover:scale-95 duration-500 rounded-2xl "
            />
            <span className="text-2xl group-hover:underline group-hover:duration-500 ">
              {" "}
              {data.name}
            </span>
            <span className="text-justify p-5"> {data.title}</span>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ProjectPage;
