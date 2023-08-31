import React from "react";
import { MENU_IMG_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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

  return (
    <div className="menu">
      <div className="menu-title">
        <h1>{name}</h1>
      </div>

      <div className="item-container">
        <ul>
          {itemCards?.map((item) => (
            <li className="item-list" key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.price / 100}
              <img src={MENU_IMG_URL + item.card.info.imageId} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
