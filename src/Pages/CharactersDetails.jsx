import { useLocation } from 'react-router-dom';
import OtherCharacters from '../component/OtherCharacters';
import CharactersDetailsStyle from "../scss/CharactersDetails.module.scss";
const CharactersDetails = () => {
    const {state:person} = useLocation();
    
  return (
    <>
    <div className={CharactersDetailsStyle.motherContainer}>
    <div className={CharactersDetailsStyle.container}>
    <article className={CharactersDetailsStyle.card}>
    <header className={CharactersDetailsStyle.cardHeader}>
      <img src={person?.image} className={CharactersDetailsStyle.image} alt="CharacterDetails"  />
    </header>
    <div className={CharactersDetailsStyle.body}>
      <h2 className={CharactersDetailsStyle.title}>
        {person?.name}
      </h2>
      <ul className={CharactersDetailsStyle.ul}>
          {person?.status === "Alive" && <><li className={CharactersDetailsStyle.li}><div className={CharactersDetailsStyle.alive}></div></li><li>&nbsp;{person?.status}</li>
          <li>&nbsp;-&nbsp;</li><li>{person?.species}</li><p className={CharactersDetailsStyle.type}>{person?.type  === "" ? "unknown":person.type} - {person?.gender === "" ? "unknown" : person?.gender}</p></>}
          {person?.status === "Dead" && <><li className={CharactersDetailsStyle.li}><div className={CharactersDetailsStyle.dead}></div></li><li>&nbsp;{person?.status}</li>
          <li>&nbsp;-&nbsp;</li><li>{person?.species}</li> <p className={CharactersDetailsStyle.type}>{person?.type  === "" ? "unknown":person.type} - {person?.gender === "" ? "unknown" : person?.gender}</p></>}
          {person?.status === "unknown" && <><li className={CharactersDetailsStyle.li}><div className={CharactersDetailsStyle.unknown}></div></li><li>&nbsp;{person?.status}</li>
          <li>&nbsp;-&nbsp;</li><li>{person?.species}</li><p className={CharactersDetailsStyle.type}>{person?.type  === "" ? "unknown":person.type} - {person?.gender === "" ? "unknown" : person?.gender}</p></>} 
          </ul>
      <p className={CharactersDetailsStyle.intro}>
        {person.origin.name}
      </p>

    </div>
    </article>
    </div>
    <footer>
    <OtherCharacters person={person}/>

    </footer>
    </div>
    

    </>
  )
}

export default CharactersDetails