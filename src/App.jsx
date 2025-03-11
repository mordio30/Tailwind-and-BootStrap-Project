import { useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [usrInput, setUsrInput] = useState('');
  const [selectedHero, setSelectedHero] = useState(null);

  const getHeroInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.allorigins.win/get?url=https://superheroapi.com/api/bf30419833875e89544076d56dbe6b07/search/${usrInput}`);
      const data = JSON.parse(response.data.contents);
      setSelectedHero(data.results[0]);
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Search for a Superhero</h1>
      
      <form onSubmit={getHeroInfo} className="d-flex justify-content-center mb-4">
        <input 
          type="text" 
          value={usrInput} 
          onChange={(e) => setUsrInput(e.target.value)} 
          placeholder="Enter hero name" 
          className="form-control w-50"
        />
        <button type="submit" className="btn btn-primary ms-3">Search</button>
      </form>

      {selectedHero && (
        <div className="card mx-auto" style={{ width: '18rem' }}>
          <img src={selectedHero.image.url} className="card-img-top" alt={selectedHero.name} />
          <div className="card-body">
            <h5 className="card-title">{selectedHero.name}</h5>
            <p className="card-text"><strong>Full Name:</strong> {selectedHero.biography['full-name']}</p>
            <p className="card-text"><strong>First Appearance:</strong> {selectedHero.biography['first-appearance']}</p>
            <h6>Power Stats:</h6>
            <ul className="list-unstyled">
              <li><strong>Intelligence:</strong> {selectedHero.powerstats.intelligence}</li>
              <li><strong>Strength:</strong> {selectedHero.powerstats.strength}</li>
              <li><strong>Speed:</strong> {selectedHero.powerstats.speed}</li>
              <li><strong>Durability:</strong> {selectedHero.powerstats.durability}</li>
              <li><strong>Power:</strong> {selectedHero.powerstats.power}</li>
              <li><strong>Combat:</strong> {selectedHero.powerstats.combat}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
