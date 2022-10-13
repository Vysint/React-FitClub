import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
