import { useState } from "react";
import cheese from "../../Public/Assets/cheese.png";
import { Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { changeProfile } from "../utils/loginSlice";
const LoginPage = ({setlogbtn}) => {
   const [takeUser,settakeUser] = useState("Not Given")

   const dispatch = useDispatch()

   const changeProfileNow = () =>{
   
    dispatch(changeProfile(true))
    
   }
   

  return (
    <div className="bg-orange-100 w-screen h-screen">
      <div className="flex">
        <div className="pl-[255px] pt-[280px]">
          <img src={cheese} className="w-[130px] h-[130px]"></img>
        </div>
        <div className="pl-[50px] pt-[260px]">
          <h1 className="font-bold text-orange-default text-7xl">Food</h1>
          <h1 className="font-bold text-orange-default text-7xl">Shrine</h1>
        </div>
        <div className="w-[660px] h-[42.37rem] bg-orange-default ml-20 ">
          <div className="flex flex-col justify-center ml-[200px] my-[224px]">
            <input
              type="text"
              className=" w-[220px] m-6 px-4 py-1 rounded-lg bg-orange-100 focus:border-black focus:outline-none focus:ring-2"
              placeholder="Username"
              onChange={(e) => settakeUser(e.target.value)}
            ></input>
            <input
              type="text"
              className=" w-[220px] m-6 px-4 py-1 rounded-lg bg-orange-100 focus:outline-none focus:ring-2"
              placeholder="Password"
            ></input>
           <Link to={"/users/" + takeUser}> <button
              className=" w-[110px]  m-6 ml-[75px] py-1 rounded-lg bg-orange-100 font-semibold"
              placeholder="Password"
              onClick={ () => changeProfileNow()}
              >
              Login
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
