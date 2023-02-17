import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurants, setRestaurants] = useState(null);
  // get data from api
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurants(json.data);
    console.log(json);
  }
  //   if(!restaurants){
  //     return <Shimmer/>
  //   }
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  // return Data
  return restaurants;
};
export default useRestaurant;
