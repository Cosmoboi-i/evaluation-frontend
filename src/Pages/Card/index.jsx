import React from "react";
import { useParams } from "react-router-dom";
import { Main } from "../../components";

export default function Card() {
  const { id } = useParams();
  return <Main id={id} />;
}
