import React from 'react'
import './first.css'
import img1 from '../../Images/productHowItWorks1.svg'
import img2 from '../../Images/productHowItWorks1.svg'
import img3 from '../../Images/productHowItWorks1.svg'
import Carousel_Item from '../../Carousel/Carousel_Item'

function First_Part()
{

    const elements = [
        {
          photo: img1,
          title: "",
          description:
            "Appointment every Wednesday 9am.",
        },
        {
          photo: img2,
          title: "",
          description:
            "First come, first served. Our offers are in limited quantities, so be quick.",
        },
        {
          photo: img3,
          title: "",
          description:
            "New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.",
        },
      ];
      return (
        
        <div className="div_carousel">
            <div className="titre_menu">
        <h1> HOW IT WORKS</h1>
        <hr className="barre_menu" />
      </div>
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

export default First_Part;