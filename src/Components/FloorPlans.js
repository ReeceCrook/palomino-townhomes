import React from 'react';
import '../css/FloorPlan.css';
import { floorPlanImages } from '../images';
import ImageCarousel from './ImageCarousel';
function FloorPlans() {
  return (
    <div className="floorPlansPage">
      <div className="floorPlanWrapper">
        <article className="floorPlanCard FPCard1">
          <div className="cardText">
            <h2>3 Bedroom 2.5 Bath</h2>
            <p>
              Master on the Main<br />
              Unfinished Basement<br />
              Optional 2 car detached garage
            </p>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[2]} showFullscreenButton={true} />
        </article>

        <article className="floorPlanCard FPCard2">
          <div className="cardText">
            <h2>2 Bedroom 2.5 Bath</h2>
            <p>
              Unfinished Basement<br />
              1 car detached garage
            </p>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[1]} showFullscreenButton={true} />
        </article>

        <article className="floorPlanCard FPCard3">
          <div className="cardText">
            <h2>3 Bedroom 2.5 Bath</h2>
            <p>
              Unfinished Basement<br />
              1 car detached garage
            </p>
          </div>
          <hr className="divider" />
          <ImageCarousel pics={floorPlanImages[0]} showFullscreenButton={true} />
        </article>
      </div>
    </div>
  );
}

export default FloorPlans;
