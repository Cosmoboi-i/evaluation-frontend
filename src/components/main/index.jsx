import React, { useState, useEffect } from "react";
import makeRequest from "../../utils/makeRequest";
import Card from "../card";
import "./main.css";
import {
  GET_ALL_EVENTS,
  UPDATE_EVENT_BY_ID,
} from "../../constants/apiEndPoints";
import { v4 as uuid } from "uuid";
import Filter from "../filter";
import DetailedCard from "../DetailedCard";
import Proptypes from "prop-types";

export default function Main(props) {
  const [eventList, setEventList] = useState([]);
  const [filters, setFilters] = useState({
    isRegistered: false,
    isBookmarked: false,
    areSeatsAvailable: false,
  });

  let filteredList = [];

  useEffect(() => {
    console.log(filters);
    filteredList = new Array(eventList);
    for (let x in filters) {
      if (x) {
        console.log("ss", filteredList[0]);
        filteredList = filteredList.filter((event) => event[x] === true);
      }
    }

    console.log("filteredlist", filteredList);
  }, [filters]);

  const fetchData = async () => {
    const data = await makeRequest(GET_ALL_EVENTS);
    console.log(data);
    setEventList(data);
  };

  const updateEvent = async (id, data) => {
    console.log("data", data);
    const res = await makeRequest(UPDATE_EVENT_BY_ID(id), { data: data });
    console.log(res);
    fetchData();
  };

  useEffect(() => {
    fetchData();
    console.log("id", props.id);
  }, []);

  return (
    <div className="main">
      <div className="content main-padding">
        {!props.id ? (
          <>
            <Filter {...{ filters, setFilters }} />
            <div className="cardpane">
              {eventList.map((event) => (
                <Card key={uuid()} {...event} updateEvent={updateEvent} />
              ))}
            </div>
          </>
        ) : (
          <DetailedCard
            {...eventList[props.id - 1]}
            updateEvent={updateEvent}
          />
        )}
      </div>
    </div>
  );
}

Main.propTypes = {
  id: Proptypes.number,
};
