import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
import { menuData } from "./menuMockData";
import {itemData} from "./itemMockData"

const useFetchMenu = (resID) => {
    const [resInfo,setresInfo] = useState(null)
    const [itemInfo,setitemInfo] = useState(null)

    useEffect(()=>{
      fetchData();
    },[])
    
    const fetchData = async () =>  {
        
      for (let index = 0; index < 20; index++) {
        if(menuData[index].id == resID){
          setresInfo(menuData[index])
          setitemInfo(itemData[index])
        }
        
      }  
    }

    return [resInfo,itemInfo];
}

export default useFetchMenu;