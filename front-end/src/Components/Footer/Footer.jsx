import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className='bg-main w-full text-white '>
        <div className='w-[80%] mx-auto py-[2rem] grid md:grid-cols-3 gap-[2rem]'>
            <div className="">
                <h1 className="font-bold text-[2rem] text-secondary mb-[1rem]">CH.</h1>
                <p className='text-gray-200  mb-[1rem] text-[15px]'>Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de " (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
                <div className="flex gap-[1rem] items-center text-[1.3rem]">
                    <FaFacebookF  className="cursor-pointer"/>
                    <IoLogoTwitter className="cursor-pointer"/>
                    <MdEmail className="cursor-pointer"/>
                </div>
            </div>
            <div className="">
                <h2 className="font-bold text-[1.5rem] mb-[1rem] text-secondary">COMPANY</h2>
                <ul className="flex flex-col gap-[.5rem] text-[15px]">
                    <li>Home</li> 
                    <li>About us</li> 
                    <li>Privacy policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="">
                <h2 className="font-bold text-[1.5rem] mb-[1rem] text-secondary">GET IN TOUCH</h2>
                <ul>
                    <li>123-456-7890</li>
                    <li>z8xXK@example.com</li>
                </ul>
            </div>
        </div>

        <p className="text-center text-gray-200 text-[12px]">Copyright © 2024 CH. All rights reserved.</p>
    </footer>
  )
}

export default Footer
