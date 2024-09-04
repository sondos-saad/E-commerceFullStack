import React from 'react'
import HomePhoto from '../../assets/17.jpg';

function Header() {
    
  return (
    <div className="w-full h-[500px] bg-no-repeat bg-cover relative"  style={{ backgroundImage: `url(${HomePhoto})` }} >
       <section className='py-[5rem] relative'>
            <div className=" w-[50%] absolute left-0 ">
                <h2 className='text-[3rem] font-bold text-main mb-[1rem]'> Order your favorite Peace for your house</h2>
                <p className='text-[1rem] text-gray-700 mb-[1rem]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard , a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de " (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                <button className='bg-secondary text-white px-[1rem] py-[.5rem] rounded-3xl font-bold  hover:bg-main duration-300'>View Menu</button>
            </div>
       </section>
    </div>
  )
}

export default Header
