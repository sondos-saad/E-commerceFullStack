import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

function PlaceOrder() {
    const { getTotalCartAmount} = useContext(StoreContext);
  return (
    <>
      <form className="mt-[9rem] w-[80%] mx-auto mb-[6rem] flex justify-between gap-[1rem]">
            <div  className="w-full">
                <p className="text-[1.5rem] font-bold mb-[2rem]">Delivery Information</p>
                <div className="flex gap-[1rem] mb-[1rem]">
                    <input type="text" placeholder="First Name" className="w-[45%] border-[1px] rounded-xl p-2"/>
                    <input type="text" placeholder="Last Name" className="w-[45%] border-[1px] rounded-xl p-2"/>
                </div>
                <div className="flex gap-[1rem] mb-[1rem]">
                    <input type="email" placeholder="Email address" className="w-[45%] border-[1px] rounded-xl p-2"/>
                    <input type="text" placeholder="Street" className="w-[45%] border-[1px] rounded-xl p-2"/>
                </div>
                <div  className="flex gap-[1rem] mb-[1rem]">
                    <input type="text" placeholder="City" className="w-[45%] border-[1px] rounded-xl p-2"/>
                    <input type="text" placeholder="State" className="w-[45%] border-[1px] rounded-xl p-2"/>
                </div>
                <div  className="flex gap-[1rem] mb-[1rem]">
                    <input type="text" placeholder="Zip code" className="w-[45%] border-[1px] rounded-xl p-2"/>
                    <input type="text" placeholder="Country" className="w-[45%] border-[1px] rounded-xl p-2"/>
                </div>
                <input type="text" placeholder="Phone" className="w-[93%] border-[1px] rounded-xl p-2"/>
            </div>
            <div className='w-full'>
                <h2 className='text-[1.5rem] font-bold'>Cart Totals</h2>
                    <div className='my-[2rem]'>
                        <div className='flex justify-between my-[.5rem]'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='flex justify-between my-[.5rem]'>
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr/>
                        <div className='flex justify-between my-[.5rem]'>
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                <button className='bg-secondary text-white w-full p-[.5rem] rounded-2xl'>PROCEED TO PAYMENT</button>
        </div>
      </form>
    </>
  );
}

export default PlaceOrder;
