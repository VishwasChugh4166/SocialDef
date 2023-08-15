import React from "react";
import CardsComponents from "./CardsComponents";
import Engage from "../Assets/Engagement-01.png";
import Target from "../Assets/Target-01.png";
import Performance from "../Assets/Performance-01-01.png";

function Cards() {
  const arr = [
    {
      img: Engage,
      title: "Engagement Amplification",
      description:
        "Building genuine connections is our forte. We'll transform your followers into a loyal community, fostering conversations and turning them into brand advocates.",
    },
    {
      img: Target,
      title: "Targeted Advertising",
      description:
        "Say goodbye to wasted ad spend. Our laser-focused targeting ensures that your message reaches the right people at the right time, boosting your ROI.",
    },
    {
      img: Performance,
      title: "Performance Tracking",
      description:
        "Our transparent reporting keeps you in the loop every step of the way. Watch your success unfold with detailed insights into campaign performance.",
    },
  ];

  const renderHelper = arr.map((item) => {
    return (
      <CardsComponents
        img={item.img}
        title={item.title}
        description={item.description}
      />
    );
  });
  return (
    <div className="cards-section section">
      <h3>Our Services</h3>
      <div className="cards">{renderHelper}</div>
    </div>
  );
}

export default Cards;
