import { useEffect, useState } from "react";

const useResData = (API_URL) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        const resData = checkJsonData(json);

        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return [allRestaurants, filteredRestaurants];
};

export default useResData;
