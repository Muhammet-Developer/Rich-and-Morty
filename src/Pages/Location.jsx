import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationStyle from "../scss/Location.module.scss";
import Pagination from "../component/Pagination";
const Location = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  const [info,setİnfo] = useState({})
  const initialUrl = "https://rickandmortyapi.com/api/location";
  const location = async (url) => {
    try {
      setLoading(true);
      await axios(url).then((data) => 
      {setData(data.data.results)
        setİnfo(data.data.info)});
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const onPrevious = () => {
    location(info.prev)
  }
  const onNext = () => {
    location(info.next)    
  }

  useEffect(() => {
    location(initialUrl);
  }, []);
  const [boş, setBoş] = useState([])
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data?.slice(indexOfFirstPost, indexOfLastPost);
  // const newData = localStorage.setItem("data",JSON.stringify([...data,data]))
  // console.log(data);
  return (
    <>
      <div className={LocationStyle.container}>
        {currentPost?.map((index, item) => {
          const { name, type, dimension, residents } = index;
          var count = 0;
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
