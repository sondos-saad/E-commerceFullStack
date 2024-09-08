import React, { useContext, useState } from 'react'
import { TiPlus } from "react-icons/ti";
import { FiMinus } from "react-icons/fi";
import { StoreContext } from '../../context/StoreContext';

function ChairItem({id, name , desc , price , img}) {
    const [itemCount, setItemCount] = useState(0);
    const {cartItems , addToCart, removeFromCart} = useContext(StoreContext);
     
    const handleIncrement = ()=>{
        setItemCount (itemCount + 1)
    }
    const handleDecrement = ()=>{
        setItemCount (itemCount - 1)
        if(itemCount <= 0){
            setItemCount (0)
        }
    }

  return (
    <div className='w-[300px]  p-2 rounded-2xl bg-main/20'>
        <div className='w-full h-[200px] '>
            <img src={img} alt='chair' className='w-full h-full object-cover  rounded-2xl'/>
        </div>
        <h2 className='my-[.5rem] text-center font-bold text-[1.5rem]'>{name}</h2>
        <p className='text-[14px] px-[1rem] text-gray-700'>{desc}</p>
        <div className='flex gap-[.5rem] items-center mt-[1rem] px-[1rem]'>
            <div className='text-[1.5rem] cursor-pointer bg-[#fff] rounded-full p-2' onClick={handleIncrement}>
                <TiPlus  className='text-[1.2rem] '/>
            </div>
            {itemCount}
            <div className='text-[1.5rem] cursor-pointer bg-[#fff] rounded-full p-2' onClick={handleDecrement}>
                <FiMinus  className='text-[1.2rem] '/>
            </div>           
        </div>
        <p className='text-[14px] px-[1rem]  font-bold mt-[.5rem] bg-secondary rounded-3xl w-fit py-2 ml-[1rem]'>Price: ${price}</p>
    </div>
  )
}

export default ChairItem
