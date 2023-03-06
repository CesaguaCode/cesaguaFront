import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "./Components/data";
import CarouselComponent from "./Components/CarouselComponent.js.js"


export default function CarouselIndex() {
  
  const sizeCard = {
    weight: "400px",
    height: "400px",
    borderRadius: "5px",
  };

  return (
    <CarouselComponent data={data} sizeCard={sizeCard}></CarouselComponent>
  );
}
