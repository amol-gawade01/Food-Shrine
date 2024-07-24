import RestoCard, { withPromotedLabel } from "./RestoCard";
import { useEffect, useState, useParams } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import SliderBody from "./SliderBody";
import {resList} from '../utils/mockData'


const Body = () => {
  const [restoList, setofrestoList] = useState([]);
  const [filterResto, setfilterResto] = useState([]);
  const [searchText, setsearchText] = useState("");

  const PromotedResto = withPromotedLabel(RestoCard);

  const fetchData = async () => {
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

   
      setofrestoList(
        resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
      );
      setfilterResto(
        resList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
      );
  
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filterResto = restoList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterResto(filterResto);
  };

  const ShimCompo = () => {
    return (
      <div className="Body">
        <div className="Advertise text-center">
          <h3 className=" text-orange-500 py-7 " id="FRONT-TEXT">
            Welcome To Food Shrine
          </h3>
        </div>
        <div className="Search py-12 flex justify-center">
          <input
            type="text"
            placeholder="search"
            className="searchbar text-center px-12  border-gray-400 border rounded-lg"
          ></input>

          <button
            data-testid="test-search"
            id="searchbut"
            className="bg-orange-500 w-11 h-9 px-4 ml-4 rounded-lg items-center bg-search bg-no-repeat bg-center "
          ></button>

          <button
            id="filter-btn"
            className="bg-orange-500 w-11 h-9 px-4 ml-4 rounded-lg bg-sort bg-no-repeat bg-center"
          ></button>
        </div>
        <Shimmer />
      </div>
    );
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) {
    return (
      <div className="on-status w-6/12 m-auto">
        <h1 className="off-msg text-4xl text-gray-400 mt-6">Check your Connection !!!</h1>
        <h2 className="off-msg text-2xl text-gray-400 mt-6 text-center">You are Offline</h2>
      </div>
    );
  }

  return restoList.length === 0 ? (
    <ShimCompo />
  ) : (
    <div className="Body">
      <div className="Advertise text-center ">
        <h3 className=" text-orange-500 py-7 " id="FRONT-TEXT">
          Welcome To Food Shrine
        </h3>
      </div>
      <SliderBody />
      <div className="Search  py-12 flex justify-center ">
        <input
          type="text"
          placeholder="search"
          className="searchbar text-center px-12  border-gray-400 border rounded-lg"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }
        }
        ></input>

        <button
          data-testid="test-search"
          id="searchbut "
          className="bg-orange-500 w-11 h-9 px-4 ml-4 rounded-lg items-center bg-search bg-no-repeat bg-center "
          onClick={handleSearch}
        ></button>

        <button
          id="filter-btn"
          className="bg-orange-500 w-11 h-9 px-4 ml-4 rounded-lg bg-sort bg-no-repeat bg-center"
          onClick={() => {
            const filtered = restoList.filter((res) => res.info.avgRating > 4);
            setfilterResto(filtered);
          }}
        ></button>
      </div>
      <div className="cardbox flex flex-wrap p-[10px] justify-center min-h-[70vw] mt-8">
        {filterResto.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <PromotedResto resData={restaurant} />
            ) : (
              <RestoCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );

 
};

export default Body;
