import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationStyle from "../scss/Location.module.scss";
import Pagination from "../component/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setİsLoading } from "../featur/api";
const Location = () => {
  const newArray = [];
  const [first, setFirst] = useState([])
  const [second, setSecond] = useState([])
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const {charactersData,isLoading} = useSelector((state)=>state.api)
const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [pagesNumber, setPagesNumber] = useState(2);

  const [info,setİnfo] = useState({})
  const initialUrl = "https://rickandmortyapi.com/api/location";
  const location = async (url) => {
    try {
      const response = await axios(url)
      const data = await response?.data?.results
      const info = await response?.data?.info
      const pages = await response?.data?.info?.next?.split("")?.reverse()[0]
      setFirst(data)
      // newArray.push(...data)
      setData(data)
      setİnfo(info)
      dispatch(setİsLoading(false))
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  // https://rickandmortyapi.com/api/location?page=6
  const getData = async () => {
    for(let i=2; i<8; i++){
      const response = await axios(`${initialUrl}?page=${i}`)
      const data = await response?.data?.results
      setFirst([...data])
      // newArray.push(...data)
    }
  }

  const onPrevious = () => {
    location(info.prev)
  }
  const onNext = () => {
    location(info.next)    
  }

  useEffect(() => {
    location(initialUrl);
  }, []);

  useEffect(() => {
    getData()
  }, []);

  
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = first?.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <div className={LocationStyle.container}>
        {currentPost?.map((index, item) => {
          const { name, type, dimension, residents } = index;
          let count = 0;
          for (let key in residents) {
            count++;
          }
          return (
            <div
              className={LocationStyle.box}
              key={item}
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
      <Pagination 
      postsPerPage={postsPerPage} 
      totalPost={data?.length}
      setPage={setPage}

      prev={info.prev}
      next={info.next}
      onPrevious={onPrevious}
      onNext={onNext}
      page={page}
      />
    </>
  );
};
// https://www.figma.com/file/yG06KXDlMRs1dPMmuWG1e8/viravira.co---Frontend-Developer-Task-(Rick-and-Morty)?node-id=0%3A1
export default Location;
