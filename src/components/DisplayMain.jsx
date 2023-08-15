import React from "react";
import Display from "./Display";
import Verification from "../Assets/Verification-01.png";
import UserFriendly from "../Assets/UserFriendly-01.png";
import Maximum from "../Assets/Maximum-01.png";

function DisplayMain() {
  const arr1 = [
    {
      img: Verification,
      title: "Guarnteed Result",
      description:
        "Building genuine connections is our forte. We'll transform your followers into a loyal community, fostering conversations and turning them into brand advocates.",
    },
    {
      img: Maximum,
      title: "Maximum Reach",
      description:
        "Say goodbye to wasted ad spend. Our laser-focused targeting ensures that your message reaches the right people at the right time, boosting your ROI.",
    },
    {
      img: UserFriendly,
      title: "Easy To Use Interface",
      description:
        "Our transparent reporting keeps you in the loop every step of the way. Watch your success unfold with detailed insights into campaign performance.",
    },
  ];
  const renderHelper1 = arr1.map((item) => {
    return (
      <Display
        img={item.img}
        title={item.title}
        description={item.description}
      />
    );
  });

  return (
    <div className="display-section ">
      <h3>Benefits</h3>
      <div className="displays">{renderHelper1}</div>
    </div>
  );
}

export default DisplayMain;
