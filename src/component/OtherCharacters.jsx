import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OtherCharactersStyle from "../scss/OtherCharacters.module.scss"
const OtherCharacters = () => {
  const navigate = useNavigate();
  const {charactersData} = useSelector(state=> state.api)
 const newCharactersData = sessionStorage.setItem("charactersData",JSON.stringify(charactersData))
  return (
    <>
    <div className={OtherCharactersStyle.container} >
      <div>
      <h1 className={OtherCharactersStyle.başlik}> &nbsp;Other Characters</h1>
      </div>
    {charactersData?.map((other,id)=>(
      <div className={OtherCharactersStyle.block} >
        <img src={other.image} className={OtherCharactersStyle.image} alt="" />
        <ul className={OtherCharactersStyle.ul}>
            <li><h2>{other.name}</h2></li>
            <li><h4>{other.origin.name}</h4></li>
            <li className={OtherCharactersStyle.li3}>{other.type} - {other.gander}</li>
        </ul>
        </div>
    
      ))}
      </div>
      {/* <div className={OtherCharactersStyle.container}>
        <div className={OtherCharactersStyle.block}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonSwS1N0e_Cp8do_APCABZEhjRuYRYPFcCoCuj8c7xw&s" className={OtherCharactersStyle.image} alt="" />
        <ul className={OtherCharactersStyle.ul}>
            <li><h2>Evil Summer Clone</h2></li>
            <li><h4>Other Characters</h4></li>
            <li className={OtherCharactersStyle.li3}>Clone - Female</li>
        </ul>
        </div>
    </div> */}
    
    </>
  )
}

export default OtherCharacters