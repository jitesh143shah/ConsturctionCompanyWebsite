import "./App.css";
import {
  About,
  Client,
  Footer,
  Hero,
  Project,
  Services,
  Testimonials,
} from "./component/imports";

function App() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Services />
      <Project />
      <Client />
      <Footer />
    </>
  );
}

export default App;
