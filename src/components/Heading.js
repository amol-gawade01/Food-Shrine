
import cart from "../../Public/Assets/cart.png";
import logo from "../../Public/Assets/logo.png";
import user from "../../Public/Assets/user.png";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";



const Heading = () => {
 
  const cartItems = useSelector((store) => store.cart.items);
  const userProfile = useSelector((store) => store.login.userProfile);




  const LoginProfile = () =>{
  
    return <img src={user} className="w-[40px] h-[40px] "></img>
  }

  const LogoutProfile = () =>{
    return <Link to='/login'><h1 className="p-2 rounded-2xl border border-white bottom-3">Login</h1></Link>
  }

  
  

  return (
    <div className="head flex justify-between bg-orange-600 sticky top-0 z-50">
      <div className="logo-box ">
        <img
          className="logo rounded-full w-24 p-2 m-2 ml-7  shadow-slate-500"
          src={logo}
        ></img>
      </div>
      <div className="nav-items items-end">
        <ul className="flex ">
          <li className="px-6 mt-10 text-white text-lg font-mono">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 mt-10 text-white text-lg font-mono">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4 mt-10 text-white text-lg font-mono">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6 text-white text-lg font-mono">
           <Link to="cart"><img className="mt-[40px] p-[1px]" src={cart} alt="cart-img"></img></Link> 
            {cartItems.length > 0 ? (
              <span className="rounded-xl  bg-black text-white  relative left-[1.5rem] px-[5px] bottom-[47px] text-center">
                {cartItems.length}
              </span>
            ) : (
              <span></span>
            )}
          </li>
        <li className="px-6 mt-10 text-white text-lg font-mono">
      
              <button
                className="login text-white border-white"
                
              
              >
              {userProfile ? <LoginProfile/>:<LogoutProfile/>}
              </button>
            
          </li> 
        </ul> 
      </div>
    </div>
  );
};

export default Heading;
