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

export default function Main() {
  const [eventList, setEventList] = useState([]);

  const fetchData = async () => {
    const data = await makeRequest(GET_ALL_EVENTS);
    console.log(data);
    setEventList(data);
  };

  const updateEvent = async (id, data) => {
    console.log(data);
    const res = await makeRequest(UPDATE_EVENT_BY_ID(id), { data: data });
    console.log(res);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="content main-padding">
        <Filter />
        <div className="cardpane">
          {eventList.map((event) => (
            <Card key={uuid()} {...event} updateEvent={updateEvent} />
          ))}
        </div>
        <button onClick={fetchData}>fetch</button>
      </div>
    </div>
  );
}
