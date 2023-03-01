import React from "react";
import Card from "../card";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="content">
        <div className="cardpane">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
