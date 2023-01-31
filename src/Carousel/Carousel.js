import React from "react";
import "./Carousel.css";

import img1 from "../Images/img1.svg";
import img2 from "../Images/img2.svg";
import img3 from "../Images/img3.svg";
import Carousel_Item from "./Carousel_Item";
function Carousel() {
  const elements = [
    {
      photo: img1,
      title: "THE BEST LUXURY HOTELS",
      description:
        "From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.",
    },
    {
      photo: img2,
      title: "NEW EXPERIENCES",
      description:
        "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.",
    },
    {
      photo: img3,
      title: "EXCLUSIVE RATES",
      description:
        "By registering, you will access specially negotiated rates that you will not find anywhere else.",
    },
  ];
  return (
    <div className="div_carousel">
      <div className="all_carousel">
        {elements.map((element) => {
          return (
            <div>
              <Carousel_Item
                image={element.photo}
                title={element.title}
                description={element.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Carousel;
