import React, { useEffect } from "react";
import "./detailedCard.css";
import Proptypes from "prop-types";

export default function DetailedCard(props) {
  useEffect(() => {
    console.log("props", props);
  });
  return (
    <div className="detail-card">
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
          {props.areSeatsAvailable ? (
            <div className="register">
              <i
                className={`${
                  props.isRegistered ? "fa-solid" : "fa-regular"
                } fa-circle-check fa-2x`}
              ></i>
              <div className="registered">
                {props.isRegistered ? "REGISTERED" : "REGISTER"}
              </div>
            </div>
          ) : (
            <div className="register no-seats">
              <i className="fa-solid fa-circle-xmark fa-2x"></i>
              <div className="registered">NO SEATS AVAILABLE</div>
            </div>
          )}
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
        <div className="register-button">
          {props.areSeatsAvailable ? (
            <button
              onClick={() =>
                props.updateEvent(props.id, {
                  isRegistered: !props.isRegistered,
                })
              }
            >
              {props.isRegistered ? "UNREGISTER" : "REGISTER"}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

DetailedCard.propTypes = {
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
