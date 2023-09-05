import React from "react";
import { MENU_IMG_URL } from "../utils/config";

const CategoryItem = ({ food }) => {
  //console.log(food.card.info);
  const { name, price, defaultPrice, description, imageId } = food.card.info;
  return (
    <div className="flex justify-between">
      <div className="grid text-left border-b-2 py-4 w-10/12">
        <span className="font-bold">{name}</span>
        <span className="font-semibold">
          ₹ {price / 100 || defaultPrice / 100}
        </span>
        <span className="text-sm font-normal">{description}</span>
      </div>
      <div className="w-3/12 p-6 relative">
        <img src={MENU_IMG_URL + imageId} className="rounded-md h-40 w-auto" />
        <div className="absolute bottom-3 bg-white inset-x-20 rounded-md border-black border-[1px]">
          <button>Add +</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
