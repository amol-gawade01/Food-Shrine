import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import Shimmermen from "./Shimmermen";
import MenuList from "./MenuList";
import { useState } from "react";
import Shimmer from "./Shimmer";




const RestaurantInfo = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  const { resID } = useParams();

  const [resInfo,itemInfo] = useFetchMenu(resID);

  const [showIndex,setshowIndex] = useState(null);
  


  if(resInfo === null){
    return <Shimmermen/>

  }
  

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo;


  const categories = itemInfo.filter( (c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  
    
    return (
    
      <div className="res-men-box">
        <div className="res-info bg-orange-500 shadow-md py-5 rounded-xl m-4">
          <h1 className="font-serif ml-[20px] font-bold text-lg py-3 text-white">{name}</h1>
          <h4 className="mb-[5px] ml-[20px] text-lg font-serif text-white">
            {cuisines.join(", ")}
          </h4>
          <h4 className="mb-[5px] ml-[20px] text-lg font-serif text-white">
            {costForTwoMessage}
          </h4>
          <h4 className="inline-block p-1 rounded-md bg-green-700 text-white mb-[5px] ml-[20px]">
            {avgRating}
          </h4>
        </div>
        <h2 className="text-center text-lg font-semibold">Menu</h2>
        {
         categories.map((category,index) => (
          <MenuList data={category?.card?.card} key={category?.card?.card?.title} showItems={index === showIndex && true} setshowIndex={() => setshowIndex(index)}/>
         ))}
      </div>
    );
 
};

export default RestaurantInfo;
