import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

function Cart() {

    const {cartItems, removeFromCart ,data} = useContext(StoreContext);

  return (
    <section className='py-[6rem]'>
      <div className='w-full md:w-[90%] mx-auto'>
            <div className='grid grid-cols-6 items-center justify-center gap-2 '>
                <p className='font-bold text-[12px] md:text-[1rem] '>Items</p>
                <p className='font-bold text-[12px] md:text-[1rem] '>Title</p>
                <p className='font-bold text-[12px] md:text-[1rem] '>Price</p>
                <p className='font-bold text-[12px] md:text-[1rem] '>Quantity</p>
                <p className='font-bold text-[12px] md:text-[1rem] '>Total</p>
                <p className='font-bold text-[12px] md:text-[1rem] '>Remove</p>
            </div>
            <br/>
            <hr/>
            {
                data.map((item ,index)=>{
                    if(cartItems[item.id ]> 0){
                        return <div key={index}>
                                <div  className='grid grid-cols-6 items-center justify-center gap-5 sm:gap-2  my-[1rem] text-[12px] md:text-[1rem] '>
                                    <div className='w-[50px] h-[50px]'>
                                        <img src={item.img} alt='photo' className='w-full h-full object-cover rounded-2xl'/>
                                    </div>
                                    <p >{item.name}</p>
                                    <p >${item.price}</p>
                                    <p >{cartItems[item.id]}</p>
                                    <p >${cartItems[item.id] * item.price}</p>
                                    <p className='cursor-pointer bg-red-600 text-white rounded-2xl p-2 font-bold w-fit text-center'><button onClick={() => removeFromCart(item.id)}>Remove</button></p>
                                </div>
                                <hr/>
                            </div>
                    }
                })
            }
            <div className='flex justify-between items-center gap-[2rem] mt-[2rem] flex-col-reverse md:flex-row'>
                <div className='w-full'>
                    <h2 className='text-[1.5rem] font-bold'>Cart Totals</h2>
                    <div className='my-[2rem]'>
                        <div className='flex justify-between my-[.5rem]'>
                            <p>Subtotal</p>
                            <p>{0}</p>
                        </div>
                        <hr/>
                        <div className='flex justify-between my-[.5rem]'>
                            <p>Delivery Fee</p>
                            <p>{2}</p>
                        </div>
                        <hr/>
                        <div className='flex justify-between my-[.5rem]'>
                            <b>Total</b>
                            <b>{0}</b>
                        </div>
                    </div>
                    <button className='bg-secondary text-white w-full p-[.5rem] rounded-2xl'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='w-full mx-auto flex justify-center'>
                    <div>
                        <p className='text-[1rem] font-bold mb-[1rem]'>If you have a promo code, Enter it here</p>
                        <div >
                            <input type='text' placeholder='Enter your code' className='w-full p-[.5rem] rounded-2xl border-[1px] outline-none border-main mb-[1rem]'/>
                            <button className='bg-secondary text-white w-full p-[.5rem] rounded-2xl'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Cart
