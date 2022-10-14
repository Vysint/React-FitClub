import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import "./Testimonials.css";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const leftArrowHandler = () => {
    if (selected === 0) {
      setSelected(tLength - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };
  const rightArrowHandler = () => {
    if (selected >= 0) {
      setSelected((prev) => prev + 1);
    }
    if (selected === tLength - 1) {
      setSelected(0);
    }
  };
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They </span>
        <span>Say About Us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img src={leftArrow} alt="" onClick={leftArrowHandler} />
          <img src={rightArrow} alt="" onClick={rightArrowHandler} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
