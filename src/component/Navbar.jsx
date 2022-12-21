import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo1 from "../img/rickAndMort.png"
import Back from "../img/back.png"
import Charters from "../Pages/Characters"
import ChartersDetails from "../Pages/CharactersDetails"
import Location from "../Pages/Location"
const Navbar = () => {
const navstyle = {
    display:"flex",
    justifyContent: "space-between",
}
const geri = () => {
  navigate(-1)
}
useEffect(() => {
 geri()
}, [])

const navigate = useNavigate();
  return (
    <>
    <div style={navstyle}>
      {Location && <img src={Back} className="back" alt="Navbar" onClick={()=>geri()}/>}
      <Link to="/"><img src={Logo1} className="ricky" alt="Navbar"/></Link>
    <div></div>
    </div>
        <hr style={{marginBottom:10}}/>
    </>
  )
}

export default Navbar