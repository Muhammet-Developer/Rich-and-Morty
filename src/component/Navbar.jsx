import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo1 from "../img/rickAndMort.png"
import Back from "../img/back.png"
import Location from "../Pages/Location"
import { useSelector } from 'react-redux'
import Characters from '../Pages/Characters'
const Navbar = () => {
  const {data} = useSelector((state)=>state.api)

const navstyle = {
    display:"flex",
    justifyContent: "space-between",
}
const back = () => {
  navigate(-1)
}
useEffect(() => {
  back()
}, [])

const navigate = useNavigate();
  return (
    <>
    <div style={navstyle}>
    <img src={Back} className="back" alt="Navbar" onClick={()=>back()}/> 
      <Link to="/"><img src={Logo1} className="ricky" alt="Navbar"/></Link>
    <div></div>
    </div>
        <hr style={{marginBottom:10}}/>
    </>
  )
}

export default Navbar