import RestaurantMenuCard from "./RestaurantMenuCard";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () =>{
    // const [resInfo, setResInfo] = useState(null);
  
    const {resId} = useParams();
    // console.log(resId)

    const resInfo = useRestaurantMenu(resId)

    const[showIndex, setShowIndex]= useState(null);

   

    if (resInfo === null ) return <Shimmer />;

    const {name,cuisines,costForTwoMessage,cloudinaryImageId} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);  
  
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories)
     
    return   (
        <div className="menu text-center " >
            <h1 className="font-bold my-6 text-1xl">{name}</h1>
            <p className="font-bold text-sm">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {
                categories.map((category, index)=>(
                    <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false}  setShowIndex={()=> setShowIndex(index)} />
                ))
            }
            
        </div>
    );
}

export default RestaurantMenu;