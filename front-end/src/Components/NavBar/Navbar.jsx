import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState("home");
    const [open , setOpen ] = useState(false)

    const handleMenuLinks =() =>{
        setOpen(!open);
    }

  return (
    <nav className="bg-main w-full fixed z-10 top-0 left-0 right-0 ">
        <div className="flex justify-between items-center gap-2 w-[80%] mx-auto py-[.5rem] text-white ">
            <h1 className="font-bold text-[2rem]">CH.</h1>
           <div className=" md:block hidden">
                <ul className="flex gap-[1rem] items-center">
                    <li onClick={()=> setMenu("home")}  className={`cursor-pointer duration-300 ${menu ==="home" ? "text-[#EFDFCC] " : "text-white"}`}> 
                        <Link to='/' > Home</Link>
                    </li>
                    <li onClick={()=> setMenu("menu")} className={`cursor-pointer duration-300 ${menu ==="menu" ? "text-[#EFDFCC] " : "text-white"}`}> 
                        <a href='#products' > Products</a>
                    </li>
                    <li onClick={()=> setMenu("mobile-app")} className={`cursor-pointer duration-300 ${menu ==="mobile-app" ? "text-[#EFDFCC] " : "text-white"}`}> 
                        <a href='#explore' > Explore</a>
                    </li>
                    <li onClick={()=> setMenu("contactUs")} className={`cursor-pointer duration-300 ${menu ==="contactUs" ? "text-[#EFDFCC] " : "text-white"}`}>
                        <a href='#footer' > Contact Us</a>
                    </li>
                </ul>
           </div>
            
            <div className="flex gap-[1rem] items-center relative">
                <FaSearch className="text-[1.3rem] cursor-pointer"/>
                <FaCartPlus className="text-[1.3rem] cursor-pointer" />
                <div className="absolute right-[90px] top-[-2px] min-w-[10px] min-h-[10px] rounded-full bg-[#f9f9f9]"></div>
                <button className="bg-secondary  px-[1rem] py-[.3rem] rounded-3xl font-bold hover:border-[1px] hover:border-white hover:bg-transparent  duration-300" onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
            <div className="text-[1.3rem] cursor-pointer md:hidden block duration-300" onClick={handleMenuLinks}>
                <FaBars />
            </div>

        </div>
     <div className="duration-300">
        {open && <div className="w-[70%] h-[50%] bg-[#000000] opacity-80 absolute  right-0 duration-300 ">
            <ul className="grid items-center justify-center h-full text-white text-[1.5rem] gap-[1rem] ">
                <li onClick={()=> setMenu("home")}  className={`cursor-pointer duration-300 ${menu ==="home" ? "text-[#EFDFCC]]" : "text-white"}`}>Home</li>
                <li onClick={()=> setMenu("menu")} className={`cursor-pointer duration-300 ${menu ==="menu" ? "text-[#EFDFCC] " : "text-white"}`}>Menu</li>
                <li onClick={()=> setMenu("mobile-app")} className={`cursor-pointer duration-300 ${menu ==="mobile-app" ? "text-[#EFDFCC] " : "text-white"}`}>mobile-app</li>
                <li onClick={()=> setMenu("contactUs")} className={`cursor-pointer duration-300 ${menu ==="contactUs" ? "text-[#EFDFCC] " : "text-white"}`}>Contact Us</li>
            </ul>
            </div>}
     </div>
    </nav>
  )
}

export default Navbar
