import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/NavBar/Navbar"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"
import Footer from "./Components/Footer/Footer"
import LoginPopup from "./Components/LoginPopup/LoginPopup"
import { useState } from "react"


function App() {

    const [showLogin ,setShowLogin] = useState(false);

  return (
    <>

      {showLogin ?<LoginPopup  setShowLogin={setShowLogin} /> : null}{}
      <div className="relative">
            <Navbar setShowLogin={setShowLogin}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<PlaceOrder />} />
                
            </Routes>
            <Footer/>
      </div>
    </>
  )
}

export default App
