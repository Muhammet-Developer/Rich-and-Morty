import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationStyle from "../scss/Location.module.scss";
import PagiLocation from "../component/PagiLocation";
import { useDispatch, useSelector } from "react-redux";
import { setİsLoading,setData } from "../featur/api";
const Location = () => {
  const newArray = [];
  const [first, setFirst] = useState([])
  const navigate = useNavigate();
  // const [data, setData] = useState();
  const {charactersData,isLoading,data} = useSelector((state)=>state.api)
    const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  

  const [info,setİnfo] = useState({})
  const initialUrl = "https://rickandmortyapi.com/api/location?page=";

  // const location = async (url) => {
  //   try {
  //     const response = await axios(url)
  //     const data = await response?.data?.results
  //     const info = await response?.data?.info
  //     const pages = await response?.data?.info?.next?.split("")?.reverse()[0]
  //     setİnfo(info)
  //     dispatch(setİsLoading(false))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
  // console.log(first)
  // const onPrevious = () => {
  //   location(info.prev)
  // }
  // const onNext = () => {
  //   location(info.next)    
  // }

  useEffect(() => {
    allLocation(initialUrl);
  }, []);
  const arr = []
  const myArray = [{
    nas:"asd",
    sd:"asd",
    afs:"hghg"
  }];
  // console.log(myArray.length)
  // if(arr.length === 0){
  //   console.log("boş");
  // }
  // else{
  //   console.log("dolu")
  // }

  
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data?.slice(indexOfFirstPost, indexOfLastPost);
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
      <PagiLocation
      postsPerPage={postsPerPage} 
      setPage={setPage}
      page={page}
      />
    </>
  );
};
export default Location;
