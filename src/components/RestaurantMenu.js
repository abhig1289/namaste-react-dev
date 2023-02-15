import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState(null);
  console.log(id);
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=17.465796400000006&lng=78.365842&menuId="+id
    );
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
  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id:{id} </h1>
        <h2>{restaurants?.name} </h2>
        <img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} alt="image" />
        <h2>{restaurants?.area} </h2>
        <h2>{restaurants?.city} </h2>
        <h2>{restaurants?.avgrating} </h2>
        <h2>{restaurants?.costForTwo} </h2>
      </div>
      <div>
        <h1>Menu</h1>
        {console.log(restaurants?.menu?.items)}
        <ul>
          {Object.values(restaurants?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
