import { useState, useEffect } from "react";
import { RestauranList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // what are react hooks , state ,useState
  //search texxt is a local state variable
  const [searchInput, setSearchInput] = useState(""); // to create state variables returns=[variable,setfunction to update the state variable]
  const [searchClicked, setSearchClicked] = useState("false");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  function filteData(searchInput, restaurants) {
    const filterData = restaurants.filter((rest) =>
      rest?.data?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return filterData;
  }
  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4306076&lng=78.3813785&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json);
  }
  console.log("render");
  useEffect(() => {
    // console.log("useEffect")
    //API Calls
    getRestaurants();
  }, []);
  //not render anything or early return
  if (!allRestaurants) return null;
  // if (filteredRestaurants.length===0) return <h1>No restaurant matches the search....!!!</h1>;
  //Conditional rendering(no data shimmerUI , if Data actual UI)
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filteData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
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
        {filteredRestaurants.length===0 ? <> No restaurant matches the search....!!! </> : filteredRestaurants.map((restaurant, index) => {
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
