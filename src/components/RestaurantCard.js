import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} =props;
    const { cloudinaryImageId , name, cuisines,avgRating,costForTwo } = resData?.info;
    return (
      <div className="res-card mx-6 my-4 h-75 w-96  bg-rose-50 flex flex-col rounded overflow-hidden shadow-lg">
        <img className="res-logo object-cover h-60 w-96 " src={ CDN_URL + cloudinaryImageId} alt="res-logo" />
        <div className=" mb-2">
          <div className=" justify-center">
          <h3 className="text-gray-700 text-base font-bold " >{name}</h3>
          <h4 className="text-gray-700 text-base" >Rating : { "⭐" + avgRating}</h4>
          </div>
       
        <h4 className="text-gray-900 text-base " > Cuisines: {cuisines.join(", ")}</h4>
        
        <h4 className="text-gray-800 text-base" > Price: {costForTwo}</h4>
        </div>
        
      </div>
    )
  } 

  //Higher Order Component
  //input - RestaurantCard => RestaurantCardPromoted
  
export  const withPromotedLabel = (RestaurantCard) =>{
    return ()=>{
      return(
        <div>
          <label>Promoted</label>
          <RestaurantCard/>
        </div>
      )
    }
  }

export default RestaurantCard;  