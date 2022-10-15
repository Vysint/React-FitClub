import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
import "./Testimonials.css";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };

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
        <motion.span
        key = {selected}
        initial = {{opacity: 0, x: -100}}
        animate = {{opacity: 1, x: 0}}
        exit= {{opacity: 0, x:100}}
        transition = {transition}
        >{testimonialsData[selected].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="arrows">
          <img src={leftArrow} alt="" onClick={leftArrowHandler} />
          <img src={rightArrow} alt="" onClick={rightArrowHandler} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
