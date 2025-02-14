import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { FOODFIRE_API_URL } from "../public/Common/constants";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useResData from "../Hooks/useResData";
import useOnline from "../Hooks/useOnline";
import UserOffline from "./UserOffline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, FilterRes] = useResData(FOODFIRE_API_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const isOnline = useOnline();

  if (!isOnline) {
    return <UserOffline />;
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants are empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);

            searchData(e.target.value, allRestaurants);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {(filteredRestaurants === null ? FilterRes : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
