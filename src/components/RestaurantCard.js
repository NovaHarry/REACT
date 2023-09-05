import React from "react";
import { IMG_URL } from "../utils/config";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, areaName } =
    props.resData?.info;

  //console.log(props?.resData?.info?.aggregatedDiscountInfoV3);

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

export const offerLabel = (RestaurantCard) => {
  return (props) => {
    //DESTRUCURING PROPS

    const { header, subHeader } = props.resData.info.aggregatedDiscountInfoV3;
    return (
      <div className="hover:scale-110 duration-[220ms] relative">
        <label className="bg-orange-500 text-white rounded-lg text-xs font-bold p-1 z-10 absolute top-2">
          {(header, subHeader)}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
