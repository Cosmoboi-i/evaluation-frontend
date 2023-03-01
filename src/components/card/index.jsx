import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="card">
      <img src="https://i.ibb.co/3zbdvWX/battle-of-bands.jpg"></img>
      <div className="card-content">
        <div className="card-heading">BATTLE OF THE BANDS</div>
        <div className="card-content">
          <div className="card-desc">
            Get ready for Battle of the Bands, where the hottest up-and-coming
            rock groups will compete for the ultimate prize. With heart-pumping
            beats and electrifying performances
          </div>
          <div>
            <div className="venue">VENUE: All stars area, stuff ahead</div>
            <div className="venue">VENUE: All stars area, stuff ahead</div>
          </div>
        </div>
        <div className="reactions">
          <div className="register">
            <i className="fa-solid fa-circle-check fa-2x"></i>
            <div className="registered">REGISTERED</div>
          </div>
          <i className="fa-regular fa-bookmark fa-2x bookmark"></i>
        </div>
      </div>
    </div>
  );
}
