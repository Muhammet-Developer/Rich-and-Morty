import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Buttonlar from "../buttons/Buttons";
import CharactersStyle from "../scss/Characters.module.scss";
import Noİmg from "../assets/noİmg.jpg";
import PaginationCharacters from "../component/PaginationCharacters";
import NoCharacters404 from "../assets/404error.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, setCharactersData } from "../features/api";
import {CharactersImageLoader, CharactersLoader} from "../component/CharactersLoader";
const Characters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { charactersData, isLoading } = useSelector((state) => state.api);
  const { state: residents } = useLocation();

  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const newData = [];
  const charcters = () => {
    dispatch(fetchStart());
    try {
      residents?.map(async (person) => {
        await axios.get(person).then((data1) => {
          newData.push(data1.data);
          dispatch(setCharactersData([...newData]));
          dispatch(fetchFail());
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [dataToFilterd, setDataToFilterd] = useState(newData);
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = charactersData?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    charcters();
  }, []);

  return (
    <>
      {charactersData.length === 0 && (
        <Link to="/">
          <img
            className={CharactersStyle.images}
            src={NoCharacters404}
            alt="character not found"
          ></img>
        </Link>
      )}
      {charactersData.length > 1 && (
        <>
          <h2>
            <b> &nbsp; Filter by status:</b>
          </h2>
          <div className={CharactersStyle.flex}>
            <Buttonlar
              dataToFilterd={dataToFilterd}
              setDataToFilterd={setDataToFilterd}
            />
          </div>
          <div className={CharactersStyle.container}>
            {currentPost?.map((person, item) => {
              return (
                <div key={item}>
                  {isLoading ? (
                    <CharactersLoader />
                  ) : (
                    <div
                      className={CharactersStyle.image}
                      onClick={() =>
                        navigate(`${person.id + person.name}`, {
                          state: person,
                        })
                      }
                    >
                      
                     { isLoading ? (
                        <CharactersImageLoader/>
                  ) : (<img
                        src={person?.image || Noİmg}
                        className={CharactersStyle.cardİmg}
                        alt="characterİmg"
                      />)}
                      <h3 className={CharactersStyle.name}>
                        <b>{person?.name}</b>
                      </h3>
                      <ul className={CharactersStyle.ul}>
                        {person?.status === "Alive" && (
                          <>
                            <li className={CharactersStyle.li}>
                              <div className={CharactersStyle.alive}></div>
                            </li>
                            <li>&nbsp;{person?.status}</li>
                            <li>&nbsp;-&nbsp;</li>
                            <li>{person?.species}</li>
                          </>
                        )}
                        {person?.status === "Dead" && (
                          <>
                            <li className={CharactersStyle.li}>
                              <div className={CharactersStyle.dead}></div>
                            </li>
                            <li>&nbsp;{person?.status}</li>
                            <li>&nbsp;-&nbsp;</li>
                            <li>{person?.species}</li>
                          </>
                        )}
                        {person?.status === "unknown" && (
                          <>
                            <li className={CharactersStyle.li}>
                              <div className={CharactersStyle.unkown}></div>
                            </li>
                            <li>&nbsp;{person?.status}</li>
                            <li>&nbsp;-&nbsp;</li>
                            <li>{person?.species}</li>
                          </>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <PaginationCharacters
            postsPerPage={postsPerPage}
            setPage={setPage}
          />
        </>
      )}
    </>
  );
};

export default Characters;
