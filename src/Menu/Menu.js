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
  const liste_image = [{image: swim, name:"snoklerling"},
  {image: massage, name:"massage"},
  {image: run, name:"hiking"} ]
  const liste2 = [{image: tour, name:"tour"},
  {image: cuisine, name:"gastronomy"},
  {image: sac, name:"shopping"} ];
  const list3 = [{image: chemin, name:"walking"},
  {image: tapis, name:"fitness"},
  {image: fauteuil, name:"reading"} ];
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
              style={{ backgroundImage: `url(${image.image})` }}
            >
              <div className="backdrop"></div>
              <div className="contenu_text">{image.name}</div>
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
              style={{ backgroundImage: `url(${image.image})` }}
            >
              <div className="backdrop"></div>
              <div className="contenu_text">{image.name}</div>
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
              style={{ backgroundImage: `url(${image.image})` }}
            >
              <div className="backdrop"></div>
              <div className="contenu_text">{image.name}</div>
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
