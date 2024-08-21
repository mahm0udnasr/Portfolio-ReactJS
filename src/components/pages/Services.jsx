import { Heading } from "../common/Heading";
import { servicesData } from "../data/dummydata";

export default function Services() {
  return (
    <>
      <section className="services">
        <div className="container">
          <Heading title="Services" />
          <div className="content grid-3">
            {servicesData.map((item, index) => (
              <div className="box" data-aos="flip-left">
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
