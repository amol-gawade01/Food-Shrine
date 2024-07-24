import {CDN_URL} from "../utils/constant";


const RestoCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

    return (
              <div data-testid='test-restocard' className="card w-[250px] h-[370px] text-left m-[5px] bg-gray-200 mr-3 rounded-3xl hover:border border-orange-500">
                <img src={CDN_URL+
                    cloudinaryImageId
                } alt="food-img" className="res-logo w-[100%] h-[55%] p-3 rounded-3xl "></img>
                <h3 className="text-center mt-2 mb-2  font-semibold ">{name}</h3>
                <h4 className="text-gray-500 text-wrap mt-3 text-center text-sm px-3 ml-2">{cuisines.join(", ")}</h4>
                <div className="flex justify-between mt-2">

                <h4 className="text-black text-left text-sm ml-2 ">{deliveryTime + " min"}</h4>
                <h4 id="rate" className="text-white  bg-green-600 text-center
                 text-sm inline-block ml-2 mr-3 rounded-md px-2">{avgRating}</h4>
                </div>
             </div>
    )
} 



export const withPromotedLabel = (RestoCard) => {
    return (props) => {
        return(
            <div>
                <label>Promoted</label>
                <RestoCard {...props} />
            </div>
        )
    }
}

export default RestoCard;
