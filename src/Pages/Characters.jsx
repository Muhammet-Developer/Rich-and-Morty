import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import Buttonlar from '../buttons/Buttonlar';
import CharactersStyle from "../scss/Characters.module.scss"
import Noİmg from "../img/noİmg.jpg"
import Pagination from '../component/Pagination';
import NoCharacters404 from './NoCharacters404';
import { useDispatch, useSelector } from 'react-redux';
import {setİsLoading,setCharactersData} from "../redux/api"
const Characters = () => {
  const navigate = useNavigate()
  const {name} = useParams();
  const dispatch= useDispatch()
  const {charactersData,isLoading} = useSelector((state)=>state.api)
  const {state:residents} = useLocation();
  const[loading,setLoading]= useState(true);
  
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  const newData =[];
  const charcters = () => {
    residents?.map(async(person)=>{
      await axios.get(person).then(data1=>newData.push(data1.data))
      dispatch(setCharactersData([...newData]))
      // setData2([...newData])
      dispatch(setİsLoading(true))
      // setLoading(false)
    })
  } 
  const[dataToFilterd,setDataToFilterd]= useState(newData)

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = charactersData?.slice(indexOfFirstPost, indexOfLastPost);
  useEffect(() => {
    charcters()
}, [residents])
  return (
    <>
    <h2><b> Filter by status:</b></h2>
    <div className={CharactersStyle.flex}>
        <Buttonlar 
        // charactersData={data2} 
        // setData2={setData2} 
        dataToFilterd={dataToFilterd} 
        setDataToFilterd={setDataToFilterd}/>
    </div>
    <div className={CharactersStyle.container}>
      {currentPost?.map((person,id)=>{
        return(
          <div className={CharactersStyle.image} key={id}  
          onClick={()=> navigate("charactersDetails",{state:person},{state:currentPost})}>
            {isLoading ? <div className={CharactersStyle.loaderDiv}>
      <ClipLoader color="#36d7b7" size={110} />
    </div>: <img src={person?.image ||Noİmg} className={CharactersStyle.cardİmg} alt="characterİmg" />}
            
          <h3><b>{person?.name}</b></h3>
          <ul className={CharactersStyle.ul}>
          {person?.status === "Alive" && <><li className={CharactersStyle.li}><div className={CharactersStyle.alive}></div></li><li>&nbsp;{person?.status}</li>
          <li>&nbsp;-&nbsp;</li><li>{person?.species}</li></>}
          {person?.status === "Dead" && <><li className={CharactersStyle.li}><div className={CharactersStyle.dead}></div></li><li>&nbsp;{person?.status}</li>
          <li>&nbsp;-&nbsp;</li><li>{person?.species}</li></>}
          {person?.status === "unknown" && <><li className={CharactersStyle.li}><div className={CharactersStyle.unkown}></div></li><li>&nbsp;{person?.status}</li>
          <li>&nbsp;-&nbsp;</li><li>{person?.species}</li></>} 
          </ul>
        </div>
               
          )
        })}
        </div>
        <Pagination 
        postsPerPage={postsPerPage} 
        // totalPost={data2?.length}
        setPage={setPage}
        page={page}
        />
        
        </>
        )
}

export default Characters