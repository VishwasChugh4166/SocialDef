import React from "react";
import Avtar from "../Assets/Avtar.png";
import Right from "../Assets/arrowRight-01.png";

function CarouselComponent() {
  return (
    <div>
      {/* <input type="image" className="Left-carosuel-btn cb" src={Right}></input> */}
      <div className="reviewer-container ">
        <div>
          <img className="reviewer-img" src={Avtar}></img>
          <div className="reviewer-review">
            <div className="reviewer-title">
              "fbdadad awduhad adaw dawdada dkadada duaadadjkawd awdawdawd dw dw
              wd w dwadfef aawdh"
            </div>
            <div className="reviewe-rating">
              <img src="#"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="big-button">
        <button>Brand Worked With Us</button>
      </div>
      {/* <input type="image" className="right-carosuel-btn cb" src={Right}></input> */}
    </div>
  );
}

export default CarouselComponent;
