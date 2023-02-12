import { IMG_CDN_URL } from "../constants"


const RestaurantCard=({name, cuisines, cloudinaryImageId, lastMileTravel})=>{
    // console.log(restaurant,'pppppppppppppppppppppp')
    // const {name, cuisines, cloudinaryImageId, lastMileTravel} = restaurant?.data;
    return(
        <div className="card">
            <img src={IMG_CDN_URL+ cloudinaryImageId} alt="restaurant card"/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravel} stars</h4>
        </div>
    )
}
export default RestaurantCard 