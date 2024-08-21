import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <>
      <section className="hero">
        {home.map((value, index) => (
          <div className="heroContainer">
            <h3 data-aos="fade-right">{value.text}</h3>
            <h1 data-aos='fade-up'>
              <Typewriter
                options={{
                  strings: [`${value.name}`, `${value.front}`, `${value.back}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{value.desc}</p>
            <div className="btnContainer">
              <button className="primaryBtn" data-aos='fade-right'>Download CV</button>
              <button className="hireMeBtn" style={{ marginLeft: "20px" }} data-aos='fade-left'>Hire Me</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
