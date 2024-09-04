import photo1 from '../../assets/1.jpg'
import photo2 from '../../assets/2.jpg'
import photo3 from '../../assets/3.jpg'
import photo4 from '../../assets/4.jpg'

function ExploreMenu() {
  return (
    <section className='py-[4rem] '>
        <h1 className='text-[2rem] font-bold text-center text-main'>Explore our menu</h1>
        <div className='w-[150px] h-[4px] bg-main mx-auto my-[1rem]'></div>
        <p className='text-gray-700 text-center mb-[1rem] w-[80%] mx-auto '>Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de " (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
        <div className='flex justify-center gap-[1rem]  w-[50%] mx-auto'>
            <div className='w-[100px] h-[200px] '>
                <img src={photo2} alt="photo" className='w-full h-full rounded-full object-cover'/>
            </div>
            <div className='w-[100px] h-[200px] '>
                <img src={photo1} alt="photo" className='w-full h-full rounded-full object-cover'/>
            </div>
            <div className='w-[100px] h-[200px] '>
                <img src={photo3} alt="photo" className='w-full h-full rounded-full object-cover'/>
            </div>
            <div className='w-[100px] h-[200px] '>
                <img src={photo4} alt="photo" className='w-full h-full rounded-full object-cover'/>
            </div>
        </div>
    </section>
  )
}

export default ExploreMenu
