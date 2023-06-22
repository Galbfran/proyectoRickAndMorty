import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import  axios  from "axios";

const Detail = () =>{

    const {detailId} = useParams();

    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/onsearch/${detailId}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [detailId]);

    return(
        <div>
            <h2>{character?.name}</h2>
            <p>Status{character?.status}</p>s
            <img src={character?.image} alt="imagen" />
        </div>
    )
}

export default Detail;