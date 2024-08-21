import { social } from "../data/dummydata";

export default function Footer() {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <a href={item.url} target="_blank" data-aos="zoom-in-left">
              {item.icon}
            </a>
          </>
        ))}
        <p data-aos="zoom-in-right">All Right Rescved 2024 - MahmoudNasr</p>
      </footer>
    </>
  );
}
