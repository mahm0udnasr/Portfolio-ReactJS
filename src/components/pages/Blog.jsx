import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";
export default function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container">
          {/* <div className="mt" style={{ marginTop: "40px" }}></div> */}
          <Heading title="Blog" />
          <div className="content grid-3">
            {blog.map((item) => (
              <div className="box" data-aos="flip-left">
                <div className="img" data-aos="flip-up">
                  <img
                    src={item.cover}
                    alt="blog image cover"
                    data-aos="flip-down"
                  />
                </div>
                <div className="text">
                  <h3 data-aos="flip-right">{item.title}</h3>
                  <label data-aos="flip-left">
                    By {item.author} | {item.date}
                  </label>
                  <p data-aos="fade-up-right">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
