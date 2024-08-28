import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

function Navbar() {
    const [menu, setMenu] = useState("home");

  return (
    <section className="bg-[#66796B]">
        <div className="flex justify-between items-center gap-2 w-[80%] mx-auto py-[.5rem] text-white ">
            <h1 className="font-bold text-[2rem]">CH.</h1>
            <ul className="flex gap-[1rem] items-center ">
                <li onClick={()=> setMenu("home")}  className={`cursor-pointer duration-300 ${menu ==="home" ? "text-[#EFDFCC] border-b-[3px] border-[#EFDFCC]" : "text-white"}`}>Home</li>
                <li onClick={()=> setMenu("menu")} className={`cursor-pointer duration-300 ${menu ==="menu" ? "text-[#EFDFCC] border-b-[3px] border-[#EFDFCC]" : "text-white"}`}>Menu</li>
                <li onClick={()=> setMenu("mobile-app")} className={`cursor-pointer duration-300 ${menu ==="mobile-app" ? "text-[#EFDFCC] border-b-[3px] border-[#EFDFCC]" : "text-white"}`}>mobile-app</li>
                <li onClick={()=> setMenu("contactUs")} className={`cursor-pointer duration-300 ${menu ==="contactUs" ? "text-[#EFDFCC] border-b-[3px] border-[#EFDFCC]" : "text-white"}`}>Contact Us</li>
            </ul>
            <div className="flex gap-[1rem] items-center relative">
                <FaSearch className="text-[1.3rem] cursor-pointer"/>
                <FaCartPlus className="text-[1.3rem] cursor-pointer"/>
                <div className="absolute right-[90px] top-[-2px] min-w-[10px] min-h-[10px] rounded-full bg-[#f9f9f9]"></div>
                <button className="bg-[#D7A184] text-black px-[1rem] py-[.3rem] rounded-3xl font-bold hover:border-[1px] hover:border-white hover:bg-transparent hover:text-white duration-300">Sign In</button>
            </div>
        </div>
    </section>
  )
}

export default Navbar
