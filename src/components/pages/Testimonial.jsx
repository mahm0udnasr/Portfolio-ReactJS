import { FormatQuote } from "@mui/icons-material";
import { testimonials } from "../data/dummydata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimonial hero">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((value) => (
              <div className="box">
                <i data-aos="zoom-out-up">
                  <FormatQuote />
                </i>
                <p data-aos="zoom-out-down">{value.text}</p>
                <div className="img">
                  <img
                    src={value.image}
                    alt="testimonial images"
                    data-aos="zoom-out-right"
                  />
                </div>
                <h3 data-aos="zoom-out-left">{value.name}</h3>
                <label data-aos="zoom-out">{value.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
