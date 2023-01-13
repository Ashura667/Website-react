import React from "react";
import './Carousel.css'
function Carousel_Item(props) 
{
    return (<div>
            
        <img className="image_carousel" src={props.image} alt="" />
        <p className="title_carousel">{props.title}</p>
        <p className="description_carousel">{props.description}</p>
      </div>)
}
export default Carousel_Item;