import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { offerLabel } from "./RestaurantCard";
import { MAIN_URL } from "../utils/config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  // CONTEXT
  const { userName, setUserInfo } = useContext(UserContext);
  //CONTEXT CODE END

  const OfferRestaurantCard = offerLabel(RestaurantCard);
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
      <div className="flex justify-end m-4 gap-4">
        <button
          className="border-2 border-black rounded-md p-1 font-semibold"
          onClick={() => {
            const topRatedResData = mainRestaurantData.filter(
              (res) => res.info.avgRating >= 4.5
            );

            setRenderRestaurantData(topRatedResData);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          className="border-black border-2 rounded-md p-1"
          type="text"
          name="userName-field"
          value={userName}
          onChange={(e) => setUserInfo(e.target.value)}
        />
        <input
          className="border-black border-2 rounded-md p-1"
          type="text"
          name="search-field"
          data-testid="searchInput"
          value={search}
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="border-2 border-black rounded-md p-1 font-semibold"
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
      <div className="flex flex-wrap gap-8 m-2">
        {renderRestaurantData?.map((res) => (
          <Link key={res.info.id} to={"restaurant/" + res.info.id}>
            {res.info?.aggregatedDiscountInfoV3?.header ? (
              <OfferRestaurantCard resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
