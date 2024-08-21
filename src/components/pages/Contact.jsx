import { contactData } from "../data/dummydata";
import { Heading } from "../common/Heading";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="container">
          <Heading title="Keep In Touch" />
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className="left">
              {contactData.map((item) => (
                <div className="box">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  {item.text2 ? <p>{item.text2}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
