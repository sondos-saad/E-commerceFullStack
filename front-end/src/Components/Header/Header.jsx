import React from 'react'
import HomePhoto from '../../assets/imgbin_chair-png.png';

function Header() {
    
  return (
    <div className=""  >
       <section className='grid md:grid-cols-2 gap-[1rem]'>
            <div className="">
                <h2 className='text-[1.5rem] lg:text-[2.5rem] font-bold text-main mb-[.5rem]'> Order your favorite Peace for your house</h2>
                <p className='text-[1rem] text-gray-700 mb-[1rem]'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard , a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de " (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                <button className='bg-secondary text-white px-[1rem] py-[.5rem] rounded-3xl font-bold  hover:bg-main duration-300'>View Menu</button>
            </div>
            <div className='w-full h-[500px]'>
                <img src={HomePhoto} alt="home" className='w-full h-full object-contain'/>
            </div>
       </section>
    </div>
  )
}

export default Header
