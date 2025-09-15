import { Route,  Routes } from "react-router-dom";
import "./App.css";

// import {
//   About,
//   Client,
//   Footer,
//   Hero,
//   Project,
//   Services,
//   Testimonials,
// } from "./component/imports";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ServicesPage from "./Pages/Services/ServicesPage";
import ContactPage from "./Pages/Contact/ContactPage";
import ProjectPage from "./Pages/Project/ProjectPage";
import CareersPage from "./Pages/Carrers/CareersPage";
import AboutPage from "./Pages/About/AboutPage";



function App() {
  return (
    <>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
 

      {/* <Hero />
      <Testimonials />
      <About />
      <Services />
      <Project />
      <Client />
      <Footer /> */}
    </>
  );
}

export default App;
