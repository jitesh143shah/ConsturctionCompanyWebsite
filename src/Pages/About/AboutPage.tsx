import { FaArrowDown } from "react-icons/fa";
import { About, Footer, Navbar } from "../../component/imports";
import { building } from "../../images";

const AboutPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mb-5">
          <h1
            className="capitalize text-center text-4xl md:text-6xl lg:text-7xl font-bold pb-12
            bg-fixed bg-center bg-cover h-[400px] justify-center flex items-center rounded-b-[15%] 
            text-white duration-500 bg-no-repeat 
             "
            style={{ backgroundImage: `url(${building})  ` }}
          >
            <div className="flex items-center justify-center group hover:underline duration-500 gap-5 hover:text-primary">
              <span className=" "> About Us</span>
              <span className="group-hover:translate-y-15 duration-500 text-2xl md:text-4xl xl:text-6xl">
                <FaArrowDown />
              </span>
            </div>
          </h1>
        </div>
        <div className="from-chat-gpt">
          <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
        

            {/* Company Info */}
            <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are a trusted construction company with over 15 years of
                  experience in delivering high-quality projects across
                  residential, commercial, and industrial sectors. Our skilled
                  professionals combine innovation, technology, and expertise to
                  build safe and sustainable structures.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From concept to completion, we ensure every detail meets the
                  highest standards, turning visions into reality for our
                  clients.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="Construction site"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-100 py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To deliver safe, innovative, and cost-effective construction
                  solutions that exceed client expectations while maintaining a
                  strong commitment to quality and sustainability.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be recognized as a leading construction company that shapes
                  the future of infrastructure by building strong foundations
                  for generations to come.
                </p>
              </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-6 md:px-20 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-10">
                Meet Our Team
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="CEO"
                    className="w-28 h-28 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-700">
                    John Smith
                  </h4>
                  <p className="text-yellow-600 font-medium">CEO</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Project Manager"
                    className="w-28 h-28 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-700">
                    Emily Johnson
                  </h4>
                  <p className="text-yellow-600 font-medium">Project Manager</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <img
                    src="https://randomuser.me/api/portraits/men/65.jpg"
                    alt="Engineer"
                    className="w-28 h-28 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-700">
                    Michael Lee
                  </h4>
                  <p className="text-yellow-600 font-medium">Lead Engineer</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <About />
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
