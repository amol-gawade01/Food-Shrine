import { useDispatch,useSelector } from "react-redux";
import ItemMenuList from "./ItemMenuList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    const cartItems = useSelector((store) => store.cart.items);
    const idItems = useSelector((store) => store.cart.id);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    const sentBuyMsg = () => {
        alert("This is the endpoint of frontend")
    }

    return(
        <div className="mt-9 mb-9">
        { idItems.length > 0 ? (
          <div className="w-6/12 m-auto border border-gray-200 shadow-lg"> 
            <ItemMenuList items={cartItems} />
            <div className="flex">
            <button className="bg-black p-2 m-2 rounded-lg text-white" onClick={handleClearCart}>
                Clear Cart</button>
            <button className="p-2 m-2 bg-yellow-400 rounded-lg text-white font-bold"
            onClick={sentBuyMsg}>Buy</button>
            </div>
        </div>
     
        
    ):(
            <div className="w-4/12 m-auto">
            <h2 className="font-semibold text-4xl text-gray-400 mt-6 p-2">Hungry ? </h2>
            <p className="text-2xl font-semibold text-gray-400 mt-6 p-2">Buy some Yummy food</p>
            </div>
        )
       
        }
    </div>
    )
}

export default Cart;