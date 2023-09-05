import React from "react";
import { MENU_IMG_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Category from "./Category";

const Menu = () => {
  const { id } = useParams();

  const resMenu = useRestaurantMenu(id);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const menuData = await fetch(MENU_URL + id);

  //   const parsedMenuData = await menuData.json();

  //   setResMenu(parsedMenuData.data);
  // };

  if (resMenu === null) return <Shimmer />;

  const { name } = resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 m-auto shadow-lg">
      <div className="text-center">
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
        </div>
        <div className="bg-slate-100">
          {categories.map((data) => (
            <Category key={data.card.card.title} ItemData={data.card.card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
