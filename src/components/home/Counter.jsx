import CountUp from "react-countup";
import { project } from "../data/dummydata";

export default function Counter() {
  return (
    <>
      <div className="hero counter">
        <div className="container grid-3 grid-4">
          {project.map((item, index) => (
            <div className="box" data-aos='zoom-in'>
              <i>{item.icon}</i>
              <h1 className="heading">
                <CountUp enableScrollSpy duration={2} end={item.num}/>
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
