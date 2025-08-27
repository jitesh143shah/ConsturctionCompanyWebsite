import "./App.css";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Project from "./component/Project/Project";
import Services from "./component/Services/Services";
import Testimonials from "./component/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Services />
      <Project />
    </>
  );
}

export default App;
