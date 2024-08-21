import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Testimonial from "../pages/Testimonial";
import Counter from "./Counter";
import Hero from "./Hero";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services/>
      <Counter/>
      <Portfolio/>
      <Testimonial/>
      {/* <Blog/> */}
      <Contact/>
    </div>
  );
};
