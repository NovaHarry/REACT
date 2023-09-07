import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Category from "./Category";

const Menu = () => {
  const { id } = useParams();

  const resMenu = useRestaurantMenu(id);

  const [show, setShow] = useState(0);

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

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories.card.card);

  return (
    <div className="w-6/12 m-auto shadow-lg">
      <div className="text-center">
        <div>
          <h1 className="font-bold text-2xl">{name}</h1>
        </div>
        <div className="bg-slate-100">
          {categories.map((data, index) => (
            <Category
              key={data.card.card.title}
              ItemData={data.card.card}
              //if the index === whatever the index value set by onclick, send true else false
              show={index === show ? true : false}
              //this will the set the show
              //when we click the particular component it will send it's index since its already mapped to it
              setShow={() => setShow(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
