import React from 'react';
import '../css/FloorPlans.css';
import { floorPlanImages } from '../images';
import ImageCarousel from './ImageCarousel';

function FloorPlans() {
  return (
    <div className="floorPlansPage">
      <div className="floorPlanWrapper">
        <article className="floorPlanCard fpCard1">
          <div className="cardTop"> 
            <div className="cardText">
              <h2>3 Bedroom 2.5 Bath</h2>
              <p>
                Primary on the Main<br />
                Unfinished Basement<br />
                Optional 2 car detached garage
              </p>
            </div>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[2]} />
        </article>

        <article className="floorPlanCard fpCard2">
          <div className="cardTop">
            <div className="cardText">
              <h2>2 Bedroom 2.5 Bath</h2>
              <p>
                Unfinished Basement<br />
                1 car detached garage
              </p>
            </div>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[1]} />
        </article>

        <article className="floorPlanCard fpCard3">
          <div className="cardTop">
            <div className="cardText">
              <h2>3 Bedroom 2.5 Bath</h2>
              <p>
                Unfinished Basement<br />
                1 car detached garage
              </p>
            </div>
          </div>
          <div className='infoBox'>
            <span className="infoMessage">Only 1 left!</span>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[0]} />
        </article>
      </div>
    </div>
  );
}

export default FloorPlans;
