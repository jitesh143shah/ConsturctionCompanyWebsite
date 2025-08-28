import { MdErrorOutline } from "react-icons/md";

const PageNotFound = () => {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center p-20 text-6xl text-primary">
        <MdErrorOutline />
        <span> 404! Error</span>
        <div>Page Not Found</div>
      </div>
    </>
  );
};

export default PageNotFound;
