import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import ChairItem from '../ChairItem/ChairItem'

function ChairDisplay() {
    const {data} = useContext(StoreContext);
  return (
    <section>
        <h2 className='text-[2rem] font-bold text-center text-main'>Top chair for you</h2>
        <div className='w-[150px] h-[4px] bg-main mx-auto my-[1rem]'></div>
        <div className='flex justify-center items-center gap-[1rem] flex-wrap mt-[2rem]'>
            {data.map((item , index) => {
                return <ChairItem key={index} id={item.id} name={item.name} desc={item.desc} price={item.price} img={item.img}/>
                })
            }
        </div>
    </section>
  )
}

export default ChairDisplay
