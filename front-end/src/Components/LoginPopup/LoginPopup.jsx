import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";

function LoginPopup({setShowLogin}) {
    const [currState , setCurrState] = useState("Sign up")
  return (
    <section className='bg-main/60 z-20 absolute h-screen    w-[100%] '>
        <form className='bg-main w-[80%] sm:w-[400px] mx-auto p-[1rem] rounded-3xl text-white'>
           <div className='flex justify-between items-center'>
                <h2 className='text-[1.5rem] font-bold mb-[1rem]'>{currState}</h2>
                <div onClick={()=> setShowLogin(false)} className='text-[1.5rem]'>
                    <IoCloseSharp />
                </div>
           </div>
           <div className='grid gap-[.5rem] mb-[1rem]'>
                {currState === "Login" ? "" : <input type='text' placeholder='Your name' required className="rounded-2xl p-2 outline-none"/> }    
                <input type='email' placeholder='Your email' required className="rounded-2xl p-2 outline-none"/>
                <input type='password' placeholder='Password' required className="rounded-2xl p-2 outline-none"/>
           </div>
          <div className=" flex justify-center items-center mb-[1rem]">
                <button className="bg-secondary p-2 font-bold rounded-2xl w-[100px] text-[1.2rem]">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
          </div>
           <div className="flex gap-3 mb-[1rem]">
                <input type='checkbox' required className="w-[20px]"/>
                <p className='text-[.8rem]'>By continuing, I agree to the terms of use & privacy policy.</p>
           </div>
            <div className=" flex justify-center items-center mb-[1rem]">
               {currState === "Login" ?  <p className='text-[.8rem]'>Create a new Account? <span className="text-secondary" onClick={()=> setCurrState("Sign up")}>Click here</span></p> : <p className='text-[.8rem]'>Already have an Account? <span className="text-secondary" onClick={()=> setCurrState("Login")}>Login here</span></p>}
            </div>
        </form>
    </section>
  )
}

export default LoginPopup
