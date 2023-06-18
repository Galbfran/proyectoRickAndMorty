import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { addFavorite , removeFavorite } from '../../redux/actions';
import { useState, useEffect} from 'react';


const Card = (props) => {
   const {character, onClose , addFavorite , removeFavorite , favorites} = props;
   const [fav , setFav] = useState(false)

   const handleFavorite = (character) =>{
      if(!fav){
         addFavorite(character)
         setFav(true)
      } else{
         removeFavorite(character.id)
         setFav(false)
      }
   }

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setFav(true);
         }
      });
      }, [favorites]);

   return (

      <div className={styles.contenedor}>
         <div>
            <button  onClick={() => {onClose(character.id)}}>X</button>
            {fav ? (
            <button onClick={() => handleFavorite(character)}>❤️</button>
               ) : (
            <button onClick={() => handleFavorite(character)}>🤍</button>
)}
            {character?.image && (
               <img className={styles.imagen} src={character.image} alt='imagen rick y morty' />
            )}
            <Link to={`/detail/${character.id}`}>
               <h2>{character.name}</h2>
            </Link>

         </div>
         <ul className={styles.lista}>
            <li>Estado: {character.status}</li>
            <li>Especie: {character.species}</li>
            <li>Genero: {character.gender}</li>
            <li>Origen: {character.origin.name}</li>
            
         </ul>
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}
const mapStateToProps = (state) =>{

   return{
      favorites: state.myFavorites
   }
}


export default connect(mapStateToProps , mapDispatchToProps)(Card)