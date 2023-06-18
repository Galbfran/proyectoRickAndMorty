import "./App.css";
//Componentes
import Cards from "./components/Cards/Cards";
import NavBar from "./components/Nav/Navbar";
import Form from "./components/Form/Form";

//Rutas
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

//Hooks
import axios from "axios";
import {useState , useEffect} from "react";
import { Route , Routes , useLocation , useNavigate} from "react-router-dom";
import Favorites from "./components/Favoritos/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access , setAccess] = useState(false);
  const navigate = useNavigate()
  
  const username = 'francogalbiati@gmail.com'
  const password = '123asdf'

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home')
    }
  }

  useEffect(() =>{
    !access && navigate('/')
  },[])

  function searchHandler(id) {
    // setCharacters([...characters, example]);
    axios(`https://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));
    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  return (
    <div className="App">
      {location.pathname === '/' ? <Form login={login}/> : <NavBar onSearch={searchHandler} random={randomHandler} />}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={closeHandler}/> }/>
        <Route path="/about" element={<About/>} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
