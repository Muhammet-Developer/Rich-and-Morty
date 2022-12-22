import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonStyle from "./Button.module.scss";
import {setCharactersData} from "../featur/api"
const Buttonlar = ({dataToFilterd}) => {
  const dispatch = useDispatch();
    const filterItem = (val) => {
        const filterAlive = dataToFilterd.filter((filtered) => {
         return filtered.status === val
        })
        dispatch(setCharactersData(filterAlive))
      } 
  return (
    <>
    <div className={ButtonStyle.flex}>
           <button className={ButtonStyle.allButton} onClick={()=>  dispatch(setCharactersData(dataToFilterd)) }>
             <div className={ButtonStyle.all}></div>
             All
           </button>
           <button className={ ButtonStyle.deadbutton} onClick={()=> filterItem("Dead")}>
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
