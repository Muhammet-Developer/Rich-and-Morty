import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDeneme } from "../featur/api";
import OtherCharactersStyle from "../scss/OtherCharacters.module.scss";
const OtherCharacters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { charactersData } = useSelector((state) => state.api);
console.log(charactersData)

  const [other, setOther] = useState(1);
  const [otherSlice, setOtherSlice] = useState(6);

  const indexOfLastPost = other * otherSlice;
  const indexOfFirstPost = indexOfLastPost - otherSlice;
  const otherChacrters = charactersData?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <> 
      <div className={OtherCharactersStyle.container}>
        <div className={OtherCharactersStyle.başlik}>
            <h1 > &nbsp;Other Characters</h1> <br />
        </div>
        {otherChacrters?.map((other, id) => (
          <div className={OtherCharactersStyle.block} onClick={()=> navigate(dispatch(setDeneme(other)))}>
            <img
              src={other.image}
              className={OtherCharactersStyle.image}
              alt=""
            />
            <ul className={OtherCharactersStyle.ul}>
              <li>
                <h2>{other.name}</h2>
              </li>
              <li>
                <h4>{other.origin.name}</h4>
              </li>
              <li className={OtherCharactersStyle.li3}>
                {other?.type === "" ? "unknown" : other?.type} - {other?.gender}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default OtherCharacters;
