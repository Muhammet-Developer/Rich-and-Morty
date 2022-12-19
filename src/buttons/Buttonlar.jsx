import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonStyle from "./Button.module.scss";
import {setCharactersData} from "../featur/api"
const Buttonlar = ({dataToFilterd}) => {
  const {charactersData} = useSelector((state)=>state.api)
  const dispatch = useDispatch();
    const filterItem = (val) => {
        const filterAlive = dataToFilterd.filter((ölü) => {
         return ölü.status === val
        })
        dispatch(setCharactersData(filterAlive))
      } 
  return (
    <>
    {/* <ul className={ButtonStyle.ulFlex}>

      <li><li className={ButtonStyle.li}></li><button className={ButtonStyle.deadbutton}>All</button></li>
    </ul> */}

    <div className={ButtonStyle.flex}>
           <button className={ButtonStyle.allButton} onClick={()=>  dispatch(setCharactersData(dataToFilterd)) }>
             <div className={ButtonStyle.all}></div>
             All
           </button>
           <button className={ButtonStyle.deadbutton} onClick={()=> filterItem("Dead")}>
             <div className={ButtonStyle.dead}></div>
             Dead
           </button>
             <button className={ButtonStyle.alivebutton}  onClick={()=> filterItem("Alive")}>
             <div className={ButtonStyle.alive}></div>
             Alive
           </button>
           <button className={ButtonStyle.unknownbutton} onClick={()=> filterItem("unknown")}>
             <div className={ButtonStyle.unknown}></div>
             Unknown
           </button>
        </div>
     
    </>
  );
};

export default Buttonlar;
