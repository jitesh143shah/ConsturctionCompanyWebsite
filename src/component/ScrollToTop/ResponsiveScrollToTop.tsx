import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ResponsiveScrollToTop = () => {
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
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary  border-1 border-primary z-10
             text-white shadow-lg hover:bg-gray hover:text-secondary duration-500 transition-all"
        >
          <FaAngleDoubleUp size={20} />
        </button>
      )}
    </>
  );
};

export default ResponsiveScrollToTop;
