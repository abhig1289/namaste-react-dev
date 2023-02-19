import { IMG_CDN_URL } from "../constants"


const RestaurantCard=({name, cuisines, cloudinaryImageId, lastMileTravel})=>{
    // console.log(restaurant,'pppppppppppppppppppppp')
    // const {name, cuisines, cloudinaryImageId, lastMileTravel} = restaurant?.data;
    return(
        <div className="card w-56 shadow-lg bg-blue-50 p-2 m-2">
            <img src={IMG_CDN_URL+ cloudinaryImageId} alt="restaurant card"/>
            <h2 className="font-bold text-lg">{name}</h2>
            <h3 >{cuisines.join(",")}</h3>
            <h4>{lastMileTravel} stars</h4>
        </div>
    )
}
export default RestaurantCard 