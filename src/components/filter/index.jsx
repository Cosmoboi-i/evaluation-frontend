import React from "react";
import "./filter.css";
import Proptypes from "prop-types";

export default function Filter(props) {
  const handleCheck = (fil) => {
    if (fil !== "all") {
      const updatedFilter = { ...props.filters, [fil]: !props.filters[fil] };
      props.setFilters(updatedFilter);
    } else {
      props.setFilters({
        isRegistered: false,
        isBookmarked: false,
        areSeatsAvailable: false,
      });
    }
  };

  return (
    <div className="filter">
      <div className="filter-top">
        <div className="filter-heading">
          <i className="fa-solid fa-filter filter-child fa-2x"></i>
          FILTER
          <i className="fa-solid fa-chevron-down filter-child icon fa-2x"></i>
        </div>
        <div className="searchbar">
          <input className="search" />
          <i className="fa-solid fa-magnifying-glass filter-child search-icon fa-2x"></i>
        </div>
      </div>
      <div className="dropdown">
        <div className="left">
          <div className="item">
            <input
              type="checkbox"
              checked={props.filters["all"]}
              onClick={() => handleCheck("all")}
            ></input>
            <span>ALL</span>
          </div>
          <div className="item">
            <input
              type="checkbox"
              checked={props.filters["isRegistered"]}
              onClick={() => handleCheck("isRegistered")}
            ></input>
            <span>REGISTERED</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <span> BOOKMARKED</span>
            <input
              type="checkbox"
              checked={props.filters["isBookmarked"]}
              onClick={() => handleCheck("isBookmarked")}
            ></input>
          </div>
          <div className="item">
            <span>SEAT AVAILABLE</span>
            <input
              type="checkbox"
              checked={props.filters["areSeatsAvailable"]}
              onClick={() => handleCheck("areSeatsAvailable")}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

Filter.propTypes = {
  filters: {
    all: Proptypes.bool,
    isRegistered: Proptypes.bool,
    isBookmarked: Proptypes.bool,
    areSeatsAvailable: Proptypes.bool,
  },
  setFilters: Proptypes.func.isRequired,
};
