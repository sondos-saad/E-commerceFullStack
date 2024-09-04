import React from 'react'

function ChairItem({id, name , desc , price , img}) {
  return (
    <div className='w-[300px] h-[400px] p-2 rounded-2xl bg-main/20'>
        <div className='w-full h-[50%] '>
            <img src={img} alt='chair' className='w-full h-full object-cover  rounded-2xl'/>
        </div>
        <h2 className='my-[.5rem] text-center font-bold text-[1.5rem]'>{name}</h2>
        <p className='text-[14px] px-[1rem] text-gray-700'>{desc}</p>
        <p className='text-[14px] px-[1rem]  font-bold mt-[.5rem] bg-secondary rounded-3xl w-fit py-2 ml-[1rem]'>Price: ${price}</p>
    </div>
  )
}

export default ChairItem
