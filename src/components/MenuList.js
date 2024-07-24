
import downarrow from  "../../Public/Assets/downarrow.png"
import ItemMenuList from "./ItemMenuList";


const MenuList = ({data,showItems,setshowIndex}) => {
    const handleClick = () => {
        setshowIndex(); 
    }
    return (
        <div className="res-men-info w-6/12  m-auto">
            <div className="flex justify-between  my-6 bg-gray-200 p-4 rounded-lg" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                {
                showItems ? <img src={downarrow} className=" rotate-180"></img> : <img src={downarrow} ></img>
                }
            </div>
        {showItems && <ItemMenuList items={data.itemCards}/>}
     </div>
    )
}

export default MenuList;