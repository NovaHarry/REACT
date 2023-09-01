import React from "react";
import { IMG_URL } from "../utils/config";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName } =
    props.resData?.info;

  return (
    <div className="w-52 m-8 h-80 hover:scale-110 duration-[250ms]">
      <img className="h-40 w-96 rounded-lg" src={IMG_URL + cloudinaryImageId} />
      <div className="py-4">
        <h1 className="font-bold">{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} stars</h3>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
