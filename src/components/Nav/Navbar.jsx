import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar({onSearch, random}) {
    return (
      <div >
        <Link to='/about'>About</Link>
        <Link to='/home'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <SearchBar onSearch={onSearch} />
        <button className="random" onClick={random}>
          ADD RANDOM
        </button>
      </div>
    );
  }