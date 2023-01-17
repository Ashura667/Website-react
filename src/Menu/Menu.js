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
  const liste_image = [swim, massage, run];
  const liste2 = [tour, cuisine, sac];
  const list3 = [chemin, tapis, fauteuil];
  return (
    <div>
      <div className="titre_menu">
        <h1> FOR ALL TASTES AND ALL DESIRES</h1>
        <hr className="barre_menu" />
      </div>
      <div className="parent_menu">
      <section className="menu">
        {liste_image.map((image) => {
          return (
            <button
              className="imagemenu"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="backdrop"></div>
              <div className="contenu_text">TEST</div>
              <div className="underline_text"></div>
            </button>
          );
        })}
      </section>
      <section className="menu">
      {liste2.map((image) => {
          return (
            <button
              className="imagemenu"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="backdrop"></div>
              <div className="contenu_text">TEST</div>
              <div className="underline_text"></div>
            </button>
          );
        })}
      </section>
      <section className="menu">
      {list3.map((image) => {
          return (
            <button
              className="imagemenu"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="backdrop"></div>
              <div className="contenu_text">TEST</div>
              <div className="underline_text"></div>
            </button>
          );
        })}
      </section>
      </div>
    </div>
  );
}
export default Menu;
