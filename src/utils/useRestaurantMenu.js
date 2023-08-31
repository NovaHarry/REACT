import { useEffect, useState } from "react";
import { MENU_URL } from "./config";

const useRestaurantMenu = (Id) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_URL + Id);

    const parsedMenuData = await menuData.json();

    setResMenu(parsedMenuData.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
