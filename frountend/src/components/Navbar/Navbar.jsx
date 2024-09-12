import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({setShowLogin}) => {

    const [menu , setMenu ] = useState("menu")
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='Navbar'> 
     <Link to = "/"> <img src={assets.logo} alt="" className="logo" /></Link>
     <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")}className={menu === "menu" ? "active" : ""}>Menu</a>
        <a  href="#app-dowmload"onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href = "#footer"onClick={() => setMenu("Conact-us")}className={menu === "Conact-us" ? "active" : ""}>Conact-us</a>
     </ul>  
     <div className="navbar-right">
        <img src={assets.search_icon}/>
        <div className="navbar-search-icon">
           <Link to= "/cart">  <img src={assets.basket_icon}/> </Link>
            <div className={getTotalCartAmount()=== 0 ? "" : "dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign In</button>
     </div>
    </div>
  )
}

export default Navbar