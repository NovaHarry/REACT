import React, { useEffect, useReducer, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { MAIN_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [search, setSearch] = useState("");

  const [mainRestaurantData, setMainRestaurantData] = useState([]);
  const [renderRestaurantData, setRenderRestaurantData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data = await fetch(MAIN_URL);
      let parsedData = await data.json();
      setMainRestaurantData(
        parsedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setRenderRestaurantData(
        parsedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (renderRestaurantData === null) return <Shimmer />;

  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            const filteredData = mainRestaurantData.filter((res) =>
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );

            setRenderRestaurantData(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-container">
        {renderRestaurantData?.map((res) => (
          <Link key={res.info.id} to={"restaurant/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
