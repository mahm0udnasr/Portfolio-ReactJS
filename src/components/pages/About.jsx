import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";

export default function About() {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((value, index) => (
            <>
              <div className="left">
                <img src={value.cover} alt="about cover photo" data-aos='fade-down-right'/>
              </div>
              <div className="right" data-aos='fade-down-left'>
                <Heading title="About Me" />
                <p>{value.desc}</p>
                <p className="about-p2">{value.desc1}</p>
                <button>Download CV</button>
                <button style={{ marginLeft: "20px" }} className="primaryBtn hireMeBtn">Hire Me</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
