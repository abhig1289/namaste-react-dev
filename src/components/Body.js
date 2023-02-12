import { useState } from "react";
import { RestauranList } from "../constants";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  // what are react hooks , state ,useState
  //search texxt is a local state variable
  const [searchInput, setSearchInput] = useState(""); // to create state variables returns=[variable,setfunction to update the state variable]
  const [searchClicked, setSearchClicked] = useState("false");
  const [restaurants, setRestaurants] = useState(RestauranList);
  function filteData(searchInput,restaurants){
    const filterData=restaurants.filter((rest) =>rest.data.name.includes(searchInput))
    return filterData;
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {/* <h1> {searchClicked}</h1>  */}
        <button
          className="search-btn"
          onClick={() => {
            // if(searchClicked=="false"){
            // setSearchClicked("true")}
            // else{
            //     setSearchClicked("false")
            // }}
            //need to filter the data and  update the restaurants accordingly
            const data = filteData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* <RestaurantCard 
          // restaurant={RestauranList[0]}
          {...RestauranList[0].data}
          /> */}
        {restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        {/* <RestaurantCard restaurant={RestauranList[1]}/> */}
      </div>
    </>
  );
};
export default Body;
