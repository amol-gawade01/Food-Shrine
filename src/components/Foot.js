const Foot = () =>{
    return(
      <div className="footer w-full flex overflow-x-hidden mt-auto">
      <div id="foot-one" className="w-[50%] bg-orange-500 h-[200px] overflow-x-hidden">
          <h4 className="text-black text-lg font-semibold m-3 p-2">. HeadQuarters, Earth</h4>
          <h4 className="text-black text-lg font-semibold m-3 p-2">. 24-hours Delivery Service</h4>
          <h4 className="text-black text-lg font-semibold m-3 p-2">. Customer Care: +91 000000000</h4>
      </div>
      <div id="foot-two" className="w-[50%] bg-black h-[200px] overflow-x-hidden">
          <h4 className="text-white text-lg font-semibold m-3 p-2">&#169; All Copyright received</h4>
      </div>
  </div>
  
    )
}

export default Foot;
