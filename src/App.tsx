import { Router, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Routes>
        <Router path="/" element={<Home />} />
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
