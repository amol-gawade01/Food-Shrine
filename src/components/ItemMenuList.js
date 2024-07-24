import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constant";
import { addItem, removeItem } from "../utils/cartSlice";


const ItemMenuList = ({ items }) => {

  const cartItems = useSelector((store) => store.cart.items);
  const idItems = useSelector((store) => store.cart.id);


  const increaseItems = (id) => {
   return idItems.filter(x => x ==id).length;
  }
   


  const dispatch = useDispatch();

  const addhandleClick = (item) => {

    dispatch(addItem(item));
    

  };

  const remhandleClick = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <ul className="ml-[20px]">
        {items.map((item) => (
          <li
            key={item.card.info.id}
            className="list-none mt-[35px] mb-[35px] font-serif"
          >
            <div className="item-men-info flex justify-between  ">
              <div className="w-9/12">
                <h2 className="font-semibold font-serif">
                  {item.card.info.name}
                </h2>
                <h3>
                  {"₹ " +
                    (item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100)}
                </h3>
                <h4 className="text-gray-500 w-[80%] text-wrap">
                  {item.card.info.description}
                </h4>
                <h5 className="border-b-2 border-gray-300 py-4 ml-[65px]"></h5>
              </div>
              <div className="w-3/12 ">
                
                {cartItems.length > 0 && (increaseItems(item.card.info.id) > 0)  ? (
                  
                  <div className="absolute flex ml-6">
                    <button
                      className="bg-white text-green-600 rounded-lg text-sm font-mono px-[8px] py-[2px] mt-[92px] text-center font-semibold z-10"
                      onClick={() => remhandleClick(item)}
                    >
                      -
                    </button>
                    <button className="bg-white text-green-600 rounded-lg mx-1 text-sm font-mono p-2 mt-[92px] text-center font-semibold z-10">
                      {increaseItems(item.card.info.id)}
                    </button>
                    <button
                      className="bg-white text-green-600 rounded-lg text-sm font-mono px-[8px] py-[4px] mt-[92px] text-center font-semibold z-10"
                      onClick={() => addhandleClick(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="absolute flex ml-10">
                    <button
                      className="bg-white text-green-600 rounded-lg mx-1 text-sm font-mono p-2 mt-[92px] text-center font-semibold z-10"
                      onClick={() => addhandleClick(item)}
                    >
                      ADD
                    </button>
                  </div>
                )}
                <img
                  src={ITEM_IMG_URL + item.card.info.imageId}
                  className="menu-img w-[128px] mr-[20px] h-[128px]  rounded-md bg-slate-200"
                ></img>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemMenuList;
