import React from 'react'
import OtherCharactersStyle from "../scss/OtherCharacters.module.scss"
const OtherCharacters = () => {
  return (
    <>
    <h1 className={OtherCharactersStyle.başlik}>Other Characters</h1>
    <div className={OtherCharactersStyle.container}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonSwS1N0e_Cp8do_APCABZEhjRuYRYPFcCoCuj8c7xw&s" className={OtherCharactersStyle.image} alt="" />
        <ul className={OtherCharactersStyle.ul}>
            <li><h2>Evil Summer Clone</h2></li>
            <li><h4>Other Characters</h4></li>
            <li className={OtherCharactersStyle.li3}>Clone - Female</li>
        </ul>
    </div>
    </>
  )
}

export default OtherCharacters