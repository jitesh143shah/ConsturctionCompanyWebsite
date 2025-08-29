import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <div
          className="relative hover:text-primary text-xl duration-500"
          onClick={scrollToTop}
          //   className="fixed bottom-6 right-6 p-3 rounded-full bg-primary border-1 border-primary
          //    text-white shadow-lg hover:bg-gray hover:text-secondary duration-500 transition-all"
        >
          Go to
          <div className="absolute top-[-25px] left-3 text-2xl">
            <FaArrowUp />
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
