import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ACharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacterDetails = async () => {
      const response = await axios.get(`https://api.allorigins.win/get?url=https://superheroapi.com/api/bf30419833875e89544076d56dbe6b07/${id}`);
      const data = JSON.parse(response.data.contents);
      setCharacter(data);
    };

    getCharacterDetails();
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image.url} alt={character.name} />
          <ul>
            <li><strong>Full Name:</strong> {character.biography['full-name']}</li>
            <li><strong>First Appearance:</strong> {character.biography['first-appearance']}</li>
            <li><strong>Power Stats:</strong> {character.powerstats}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ACharacterPage;
