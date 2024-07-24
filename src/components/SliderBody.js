import Biryani from '../../Public/Assets/Biryani.png'
import Pizza from '../../Public/Assets/Pizza.jpg'
import Burger from '../../Public/Assets/Burger.jpg'
import IceCream from '../../Public/Assets/IceCream.jpg'
import { useEffect } from 'react'

const SliderBody = () => {


    useEffect(() => {
        let counter = 1;
        const interval = setInterval(() => {
            const radio = document.getElementById('radio' + counter);
            if (radio) {
                radio.checked = true;
            }
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 3000);
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);
   
    return(
        <div className='m-0 p-0 h-500px flex justify-center items-center  mt-[60px]'>

        <div className="slider w-[800px] h-[500px] rounded-lg overflow-hidden">
            <div className="slides w-[500%] h-[500px] flex">
                <input id="radio1" type="radio"  name='radio-btn' className='hidden' ></input>
                <input id="radio2" type="radio" name='radio-btn' className='hidden'></input>
                <input id="radio3" type="radio" name='radio-btn' className='hidden'></input>
                <input id="radio4" type="radio" name='radio-btn' className='hidden'></input>

                <div className='w-[20%] duration-[2000ms] first'>
                    <img src={Biryani} className='w-[800px] h-[500px]'></img>
                </div>
                <div className='w-[20%] duration-[2000ms]'>
                    <img src={Burger} className='w-[800px] h-[500px]'></img>
                </div>
                <div className='w-[20%] duration-[2000ms]'>
                    <img src={IceCream} className='w-[800px] h-[500px]'></img>
                </div>
                <div className='w-[20%] duration-[2000ms]'>
                    <img src={Pizza} className='w-[800px] h-[500px]'></img>
                </div>
               <div className='navigation-auto  absolute flex w-[800px] justify-center mt-[450px]'>
                <div className='auto-btn1 border-2 border-white p-[5px] rounded-lg duration-1000'></div>
                <div className='auto-btn2 border-2 border-white p-[5px] rounded-lg duration-1000'></div>
                <div className='auto-btn3 border-2 border-white p-[5px] rounded-lg duration-1000'></div>
                <div className='auto-btn4 border-2 border-white p-[5px] rounded-lg duration-1000'></div>
            </div>

            <div className='navigation-manual absolute w-[800px] mt-[450px] flex justify-center '>
                <label htmlFor='radio1'  className='manual-btn border-2 border-white p-[5px] rounded-lg duration-1000  hover:bg-white cursor-pointer'></label>
                <label htmlFor='radio2' className='manual-btn border-2 border-white p-[5px] rounded-lg duration-1000  hover:bg-white cursor-pointer'></label>
                <label htmlFor='radio3' className='manual-btn border-2 border-white p-[5px] rounded-lg duration-1000  hover:bg-white cursor-pointer'></label>
                <label htmlFor='radio4' className='manual-btn border-2 border-white p-[5px] rounded-lg duration-1000  hover:bg-white cursor-pointer'></label>
            </div>

            </div>

        </div>
        </div>
    )
  
}

export default SliderBody;