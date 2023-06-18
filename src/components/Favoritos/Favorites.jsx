import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { orderCards , filterCards} from '../../redux/actions';

function Favorites({ characters =[], onClose, favorites =[] }) {
  const displayCharacters = favorites.length > 0 ? favorites : characters;
  const { myFavorites} = useSelector(state => state)
  const dispatch = useDispatch();

  const handleOrder = (event) =>{
    dispatch(orderCards(event.target.value))
  }

  const handleFilter = (event) =>{
    dispatch(filterCards(event.target.value))
  }


  return (
    <div className={styles.container}>
      <div>
        <select onChange={handleOrder}>
          <option value="order" disabled='disabled'>Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="filter" disabled='disable'>Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {displayCharacters.length > 0 ? (
        displayCharacters.map((character) => (
          <Card key={character.id} character={character} onClose={onClose} />
        ))
      ) : (
        <p>No hay personajes disponibles</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
