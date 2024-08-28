import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/NavBar/Navbar"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"


function App() {


  return (
    <>
      <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<PlaceOrder />} />
            </Routes>
      </div>
    </>
  )
}

export default App
