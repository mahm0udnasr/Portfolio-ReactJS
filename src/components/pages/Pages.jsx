import Header from "../common/Header";
import { Home } from "../home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "../common/Footer";

function Pages() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/testimonials" element={<Testimonial />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Pages;
