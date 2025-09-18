import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../../../component/imports";
import { ResidentailConstruction, WorkerClothes } from "../../../../images";

const CommercialConstruction = () => {
  return (
    <>
      <Navbar />
      
      <div>
        <div className="min-h-screen bg-gray-100">
          {/* Hero Section */}
          <section
            className="bg-cover bg-center py-10 flex items-center justify-center"
            style={{ backgroundImage: `url('/images/commercial-hero.jpg')` }}
          >
            <h1 className="text-5xl text-white font-bold bg-black bg-opacity-50 p-5 rounded">
              Commercial Construction
            </h1>
          </section>
          <div className="container py-10 ">
        <img src={ResidentailConstruction} alt={WorkerClothes} className="w-full object-cover "/>
      </div>

          {/* About Section */}
          <section className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-semibold mb-6">About Our Services</h2>
            <p className="text-gray-700 text-lg mb-4">
              We specialize in commercial construction projects, delivering
              high-quality buildings tailored to your business needs. Our team
              ensures timely execution, safety compliance, and innovative
              design.
            </p>
            <p className="text-gray-700 text-lg">
              From office complexes to retail spaces, we handle every project
              with professionalism and precision.
            </p>
          </section>

          {/* Services Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold mb-10 text-center">
                Our Expertise
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-bold mb-2">Office Buildings</h3>
                  <p>
                    Design and construct modern, functional office spaces for
                    businesses of all sizes.
                  </p>
                </div>
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-bold mb-2">Retail Spaces</h3>
                  <p>
                    Create attractive and accessible retail stores, malls, and
                    commercial centers.
                  </p>
                </div>
                <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-bold mb-2">
                    Industrial Facilities
                  </h3>
                  <p>
                    Build warehouses, factories, and industrial facilities with
                    efficiency and safety in mind.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 text-white py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8">
              Contact us today to discuss your commercial construction needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommercialConstruction;
