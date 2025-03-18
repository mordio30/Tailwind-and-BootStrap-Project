import { useState } from 'react';
import axios from 'axios';
import HeroCard from '../src/components/CharacterCard';

function SearchPage() {
  const [usrInput, setUsrInput] = useState('');
  const [heroes, setHeroes] = useState([]);

  const getHeroInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.allorigins.win/get?url=https://superheroapi.com/api/bf30419833875e89544076d56dbe6b07/search/${usrInput}`);
      const data = JSON.parse(response.data.contents);
      setHeroes(data.results || []);
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };

  return (
    <div>
      <h2>Search for a Superhero</h2>
      <form onSubmit={getHeroInfo}>
        <input 
          type="text" 
          value={usrInput} 
          onChange={(e) => setUsrInput(e.target.value)} 
          placeholder="Enter hero name" 
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </div>
  );
}

export default SearchPage;