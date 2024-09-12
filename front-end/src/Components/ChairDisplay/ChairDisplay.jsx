import React, { useContext, useRef, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import ChairItem from '../ChairItem/ChairItem'

function ChairDisplay() {
    const {data} = useContext(StoreContext);
    const inputRef = useRef();
    const [filteredData, setFilteredData] = useState(data);

    const handleInput = (e)=>{
        e.preventDefault();
        const value = inputRef.current.value;
        
        if(value){
            const filteredData = data.filter((item)=>
                 item.name.toLowerCase().includes(value.toLowerCase())
            )
            setFilteredData(filteredData);
        }else{
            setFilteredData(data);
        }
    };

  return (
    <section  id='products'>
        <h2 className='text-[2rem] font-bold text-center text-main'>Top chair for you</h2>
        <div className='w-[150px] h-[4px] bg-main mx-auto my-[1rem]'></div>
        <div className='sm:w-[500px] mx-auto mt-[1rem]'>
            <input ref={inputRef} type="text" className='w-full  h-[40px] px-[1rem] border-[1px] border-main rounded-3xl text-[1.2rem] outline-none mx-auto' placeholder='Search' onChange={handleInput}/>
        </div>
        <div className='flex justify-center items-center gap-[1rem] flex-wrap mt-[2rem]'>
            {filteredData.map((item , index) => {
                return <ChairItem key={index} id={item.id} name={item.name} desc={item.desc} price={item.price} img={item.img}/>
                })
            }
        </div>
    </section>
  )
}

export default ChairDisplay
