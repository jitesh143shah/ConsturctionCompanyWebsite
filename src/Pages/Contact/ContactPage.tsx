import { FaStar } from "react-icons/fa";
import { Footer, Navbar } from "../../component/imports";
import { ContactPageLink } from "../../constants/ContactPageLink";
import { SocialLinks } from "../../constants/SocialLinks";

const ContactPage = () => {
  return (
    <>
      <div className="bg-gray-600">
        <Navbar />
        <div className="container text-white py-7  md:py-10  ">
          <div>
            <h1 className="capitalize text-center text-4xl md:text-6xl lg:text-8xl font-bold pb-12">
              Conctact Us
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex flex-col gap-5 bg-secondary/20 py-5 px-5 pr-15">
              <div className="flex flex-col gap-2">
                <span className="text-2xl md:text-3xl font-bold flex gap-2 items-center ">
                  <FaStar className="text-primary text-[20px]" />
                  Expert Team
                </span>
                <span className="text-2xl md:text-3xl xl:text-4xl font-bold">
                  Expert Team Get In Touch With Conchitec!!
                </span>
                <p className="text-justify text-1xl sm:text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              {ContactPageLink.map(({ icons: Icon, name, title }, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-5 md:gap-10 justify-between items-center group"
                  >
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold">
                        {title}
                      </span>
                      <span>{name}</span>
                    </div>
                    <div
                      className="p-2 sm:p-3 rounded-full text-xl
                    duration-500  bg-secondary border-1 group-hover:bg-primary"
                    >
                      <Icon />
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-between  items-center flex-col sm:flex-row gap-5">
                <div className="text-xl">Social Media</div>
                <div className="flex gap-1 ">
                  {SocialLinks.map(({ icons: Icon }, index) => (
                    <div
                      key={index}
                      className="bg-primary flex items-center justify-center
                      rounded-full p-2 hover:bg-secondary duration-500"
                    >
                      {<Icon />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 px-10 py-15 ">
              <form action="">
                <h1 className="text-2xl md:text-4xl font-bold">
                  General Inquiries
                </h1>
                <div className="flex flex-col gap-5 bg-amber-700 ">
                  <div className="flex flex-col md:flex-row">
                    <div>
                      <label htmlFor="fname">
                        <span>First Name:</span>
                      </label>
                      <input type="text" id="fname" className="bg-white/50" />
                    </div>
                    <div>
                      <label htmlFor="lname">
                        <span>Last Name:</span>
                      </label>
                      <input type="text" id="lname" className="bg-white/50" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">
                      <span>Email:</span>
                    </label>
                    <input type="email" id="email" className="bg-white/50" />
                  </div>
                  <div>
                    <label htmlFor="number">
                      <span>Mobile Number:</span>{" "}
                      <input
                        type="number"
                        id="number"
                        className="bg-white/50"
                      />
                    </label>
                  </div>
                  <div className="flex ">
                    <label htmlFor="message">
                      <span>Message:</span>
                      <textarea id="message" className="bg-white/50"></textarea>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
