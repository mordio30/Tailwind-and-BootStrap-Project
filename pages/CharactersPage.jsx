import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import CharacterCard from "../src/components/CharacterCard";

const CharactersPage = () => {
  const { isFavorite, addFavorite, rmFavorite } = useOutletContext();
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(
          "https://api.allorigins.win/get?url=https://superheroapi.com/api/bf30419833875e89544076d56dbe6b07/search/a"
        );
        const data = JSON.parse(response.data.contents);
        
        if (!data.results) {
          throw new Error("No characters found");
        }
        
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching character data:", error);
        setError(error.message);
      }
    };

    getCharacters();
  }, []);

  return (
    <div>
      <h2>All Superheroes</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div className="d-flex flex-wrap">
        {characters.map((character) => (
          <div key={character.id} className="col-12 col-sm-6 col-lg-4 mb-4">
            <CharacterCard 
              character={character} 
              isFavorite={isFavorite} 
              addFavorite={addFavorite} 
              rmFavorite={rmFavorite} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;


