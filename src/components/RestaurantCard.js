import React from "react";
import { IMG_URL } from "../utils/config";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName } =
    props.resData?.info;

  return (
    <div className="restaurant-card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
