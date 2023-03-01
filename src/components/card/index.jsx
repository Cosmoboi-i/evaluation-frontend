import React from "react";
import "./card.css";
import Proptypes from "prop-types";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl}></img>
      <div className="card-content">
        <div className="card-heading">{props.name}</div>
        <div className="card-content">
          <div className="card-desc">{props.description}</div>
          <div>
            <div className="venue">
              <b>VENUE:</b> {props.venue}
            </div>
            <div className="venue">
              <b>DATE:</b> {props.datetime}
            </div>
          </div>
        </div>
        <div className="reactions">
          <div className="register">
            <i
              className={`${
                props.isRegistered ? "fa-solid" : "fa-regular"
              } fa-circle-check fa-2x`}
              onClick={() =>
                props.updateEvent(props.id, {
                  isRegistered: !props.isRegistered,
                })
              }
            ></i>
            <div className="registered">
              {props.isRegistered ? "REGISTERED" : "REGISTER"}
            </div>
          </div>
          <i
            className={`${
              props.isBookmarked ? "fa-solid" : "fa-regular"
            } fa-bookmark fa-2x bookmark`}
            onClick={() =>
              props.updateEvent(props.id, {
                isBookmarked: !props.isBookmarked,
              })
            }
          ></i>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  venue: Proptypes.string.isRequired,
  datetime: Proptypes.string.isRequired,
  timezone: Proptypes.string.isRequired,
  areSeatsAvailable: Proptypes.bool.isRequired,
  isRegistered: Proptypes.bool.isRequired,
  isBookmarked: Proptypes.bool.isRequired,
  imgUrl: Proptypes.string.isRequired,
  updateEvent: Proptypes.func.isRequired,
};
