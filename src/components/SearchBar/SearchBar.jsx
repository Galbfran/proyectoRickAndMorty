import styles from './SearchBar.module.css'
import {useState} from 'react'


export default function SearchBar(props) {
   const {onSearch} = props;

   const [id, setId] = useState("");

   function changeHandler(e) {
      e.preventDefault();
      let input = e.target.value;
      setId(input);
   }

   return (
      <div className={styles.buscador}>
         <input type='search' placeholder='Ingrese el personaje que busca.' value={id} onChange={changeHandler} />
         <button onClick={() => onSearch(id)} >Buscar Personaje</button>
      </div>
   );
}
