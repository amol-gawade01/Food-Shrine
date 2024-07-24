import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [OnlineStatus,setonlinestatus] = useState(true);

    useEffect(() => {
      
        window.addEventListener("offline", () =>{

            setonlinestatus(false)
        });

        window.addEventListener("online",() =>{

            setonlinestatus(true)
        });
        })


        return OnlineStatus;
}

export default useOnlineStatus;

