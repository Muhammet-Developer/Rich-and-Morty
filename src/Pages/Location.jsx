import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationStyle from "../scss/Location.module.scss";
import PaginationLocation from "../component/PaginationLocation";
import { useDispatch, useSelector } from "react-redux";
import { setİsLoading,setData } from "../features/api";
const Location = () => {
  const navigate = useNavigate();
  const {data} = useSelector((state)=>state.api)
    const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  

  const initialUrl = "https://rickandmortyapi.com/api/location?page=";


const allLocation = async (url) => {
  let data = [];
  let i = 1;
  while (i < 8) {
    const response = await axios(`${url}${i}`)
    data = [...data, ...response.data.results];
    dispatch(setData(data));
    i += 1;
  }
};

  useEffect(() => {
    allLocation(initialUrl);
  }, []);

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <div className={LocationStyle.container}>
        {currentPost?.map((item,index) => {
          const { name, type, dimension, residents } = item;
          let count = 0;
          for (let key in residents) {
            count++;
          }
          return (
            <div
              className={LocationStyle.box}
              key={index}
              onClick={() => navigate(`${name}`, { state: residents })}
              >
              <h3>{name}</h3>
              <br />
              <ul className={LocationStyle.ul}>
                <li className={LocationStyle.li}>Type</li>
                <li >:&nbsp; </li>
                <li> {type}</li>
                </ul>

                <ul className={LocationStyle.ul}>
                <li className={LocationStyle.li}>Dimension</li>
                <li >:&nbsp;</li>
                <li>{dimension === "unknown" ? "-" : dimension}</li>
                </ul>

                <ul className={LocationStyle.ul}>
                <li className={LocationStyle.li}>Resident count</li>
                <li >:&nbsp; </li>
                <li>{count}</li>
                </ul>
            </div>
          );
        })}
      </div>
      <PaginationLocation
      postsPerPage={postsPerPage} 
      setPage={setPage}
      page={page}
      />
    </>
  );
};
export default Location;
