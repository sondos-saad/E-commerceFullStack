import React, { useContext} from 'react'
import { TiPlus } from "react-icons/ti";
import { FiMinus } from "react-icons/fi";
import { StoreContext } from '../../context/StoreContext';

function ChairItem({id, name , desc , price , img}) {

    const {cartItems , addToCart, removeFromCart} = useContext(StoreContext);
     

  return (
    <div className='w-[300px]  p-2 rounded-2xl bg-main/20 relative'>
        <div className='w-full h-[200px] '>
            <img src={img} alt='chair' className='w-full h-full object-cover  rounded-2xl'/>
        </div>
        <h2 className='my-[.5rem] text-center font-bold text-[1.5rem]'>{name}</h2>
        <p className='text-[14px] px-[1rem] text-gray-700'>{desc}</p>
        {!cartItems[id] ? 
            <div className='flex gap-[.5rem] items-center mt-[1rem] px-[1rem] absolute right-[1rem] top-[35%] duration-300'>
                <div className='text-[1.5rem] cursor-pointer bg-[#fff] rounded-full p-2' onClick={()=>addToCart(id)}>
                    <TiPlus  className='text-[1.2rem] '/>
                </div>                
            </div>
        :
            <div className='flex gap-[.5rem] items-center mt-[1rem] p-[.2rem] absolute right-[1rem] top-[35%] bg-secondary rounded-3xl duration-300'>
                <div className='text-[1.5rem] cursor-pointer bg-[#fff] rounded-full p-2' onClick={()=>addToCart(id)}>
                    <TiPlus  className='text-[1.2rem] '/>
                </div>
                <p className='text-[1rem]  '>{cartItems[id]}</p>
                <div className='text-[1.5rem] cursor-pointer bg-[#fff] rounded-full p-2' onClick={()=>removeFromCart(id)}>
                    <FiMinus  className='text-[1.2rem] '/>
                </div>           
            </div>
        }
        
        <div className='flex justify-center items-center  mt-[.5rem]'>
            <p className='text-[14px] font-bold bg-secondary rounded-3xl w-[150px] text-center py-2'>Price: ${price}</p>
        </div>
    </div>
  )
}

export default ChairItem
