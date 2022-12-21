import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OtherCharactersStyle from "../scss/OtherCharacters.module.scss";
const OtherCharacters = ({person}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { charactersData } = useSelector((state) => state.api);

  const [other, setOther] = useState(1);
  const [otherSlice, setOtherSlice] = useState(6);

  const indexOfLastPost = other * otherSlice;
  const indexOfFirstPost = indexOfLastPost - otherSlice;
  const otherChacrters = charactersData?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <> 
      <div className={OtherCharactersStyle.container}>
        <div className={OtherCharactersStyle.başlik}>
            <h2 > &nbsp;Other Characters</h2> <br />
        </div>
        {otherChacrters?.map((other, id) => (
          <div className={OtherCharactersStyle.block} key={id} 
          >
            <img
              src={other?.image}
              className={OtherCharactersStyle.image}
              alt="other Characters"
            />
            <ul className={OtherCharactersStyle.ul}>
              <li>
                <h2>{other.name}</h2>
              </li>
              <li>
                <h4>{other.origin.name}</h4>
              </li>
              <li className={OtherCharactersStyle.li3}>
                {person?.status === "Alive" ? other?.type === "" ? `${other?.type  === "" ? "unknown":other?.type}-${other?.gender  === "" ? "unknown":other?.gender}`:"unknown" :""}
                {person?.status === "Dead" ? other?.type === "" ?  `${other?.type  === "" ? "unknown":other?.type}-${other?.gender  === "" ? "unknown":other?.gender}`:"unknown" :""}
                {person?.status === "unknown" ? other?.type === "" ?`${other?.type  === "" ? "unknown":other?.type}-${other?.gender  === "" ? "unknown":other?.gender}`:"unknown" :""}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
export default OtherCharacters;
