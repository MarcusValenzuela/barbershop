import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { Button } from "./Button";
import PictureOne from "./images/haircut1.jpg";
import PictureTwo from "./images/picture2.jpg";
import PictureThree from "./images/picture3.jpg";
import PictureFour from "./images/picture4.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem src={PictureOne} text="Crisp Fade" label="$25" path="/" />
          </div>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src={PictureTwo}
              text="Taper"
              label="$25"
              path="/services"
            />
          </div>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src={PictureThree}
              text="Crisp Fade + Beard Trim"
              label="$28"
              path="/services"
            />
          </div>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src={PictureFour}
              text="Taper + Beard Trim"
              label="$30"
              path="/services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
