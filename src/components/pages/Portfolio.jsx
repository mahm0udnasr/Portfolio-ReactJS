import { portfolioData } from "../data/dummydata";
import { Heading } from "../common/Heading";
import { useState } from "react";
import { Visibility } from "@mui/icons-material";
const allCategory = [
  "all",
  ...new Set(portfolioData.map((item) => item.category)),
];
export default function Portfolio() {
  const [list, setList] = useState(portfolioData);
  const [category, setCategory] = useState(allCategory);
  const filterItems = (category) => {
    const newItems = portfolioData.filter(
      (items) => items.category === category
    );
    setList(newItems);
    if (category === "all") {
      setList(portfolioData);
    }
  };
  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolio" />
          <div className="catButton">
            {category.map((category) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="content grid-3">
            {list.map((item) => (
              <div className="box" data-aos='fade-up'>
                <div className="img">
                  <img src={item.cover} alt="cover img" />
                </div>
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
