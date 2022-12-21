import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import Buttonlar from '../buttons/Buttonlar';
import CharactersStyle from "../scss/Characters.module.scss"
import Noİmg from "../img/noİmg.jpg"
import Pagination from '../component/PaginationCharacters';
import NoCharacters404 from '../assets/404error.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {setİsLoading,setCharactersData} from "../featur/api"
import Catalog from '../component/Catalog';
const Characters = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const {charactersData,isLoading} = useSelector((state)=>state.api)
  const {state:residents} = useLocation();
  const [loading, setLoading] = useState(false)
  
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  
  const newData =[];
  const charcters = () => {
    residents?.map(async(person)=>{
      await axios.get(person).then(data1=>{
        newData.push(data1.data)
        dispatch(setCharactersData([...newData]))
      })
    })
  } 
  const[dataToFilterd,setDataToFilterd]= useState(newData)


  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = charactersData?.slice(indexOfFirstPost, indexOfLastPost);
  
  useEffect(() => {
    charcters()
    setLoading(true)
}, [])

  return (
    <>
    {charactersData.length === 0  && <Link to="/"><img className={CharactersStyle.images} src={NoCharacters404} alt="character not found"></img></Link> }
    
    {charactersData.length > 1 &&  (
      <>
    <h2><b> &nbsp; Filter by status:</b></h2>
    <div className={CharactersStyle.flex}>
        <Buttonlar 
        dataToFilterd={dataToFilterd} 
        setDataToFilterd={setDataToFilterd}/>
    </div>
    <div className={CharactersStyle.container}>
        
      {/* {currentPost?.map((person,item)=>{
        return(
          <div key={item} >
            
          {loading ? <Catalog/> : 
          <div className={CharactersStyle.image}  
          onClick={()=> navigate(`${person.id+person.name}`,{state:person})}>      
          <img src={person?.image ||Noİmg} className={CharactersStyle.cardİmg} alt="characterİmg" />          
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
        }
          </div>
          )
        })} */}
        {loading ? currentPost?.map((person,item)=>{
          return(
          <div className={CharactersStyle.image}  
          onClick={()=> navigate(`${person.id+person.name}`,{state:person})}>      
          <img src={person?.image ||Noİmg} className={CharactersStyle.cardİmg} alt="characterİmg" />          
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
        }):currentPost?.map((asd)=>(
          <Catalog/>
        ))}
        </div>

        <Pagination 
        postsPerPage={postsPerPage} 
        setPage={setPage}
        page={page}
        />
      </>)}
        
        </>
        )
}

export default Characters