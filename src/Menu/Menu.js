import React from "react";
import "./Menu.css";
import swim from "../Images/swim.jpg";
import massage from "../Images/massage.avif";
import run from "../Images/run.avif";
import tour from "../Images/bateau.avif";
import cuisine from "../Images/cuisine.avif";
import sac from "../Images/sac.jpg";
import chemin from "../Images/chemin.avif";
import tapis from "../Images/tapis.jpg";
import fauteuil from "../Images/fauteuil.jpg";

function Menu() {
  const liste_image = [
    swim,
    massage,
    run,
    tour,
    cuisine,
    sac,
    chemin,
    tapis,
    fauteuil,
  ];
  return (
    <div>
      <div className="titre_menu">
        <h1> FOR ALL TASTES AND ALL DESIRES</h1>
        <hr className="barre_menu" />
      </div>
      <div className="menu">
        {liste_image.map((image) => {
          return <img className="test" src={image} alt="" />;
        })}
      </div>
    </div>
  );
}
export default Menu;
