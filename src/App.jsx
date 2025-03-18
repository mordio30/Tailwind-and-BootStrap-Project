import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [favorites, setFavorites] = useState([]);
  const [usrInput, setUsrInput] = useState('');
  const [selectedHero, setSelectedHero] = useState(null);

  const isFavorite = (hero) => favorites.some(fav => fav.id === hero.id);

  const addFavorite = (hero) => {
    if (favorites.length >= 4) {
      alert("You can only have 4 favorites");
      return;
    }
    setFavorites([...favorites, hero]);
  };

  const rmFavorite = (hero) => {
    setFavorites(favorites.filter(fav => fav.id !== hero.id));
  };

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

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <>
      <NavBar />
      <h1>Superhero API</h1>
      
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
            {isFavorite(selectedHero) ? (
              <button onClick={() => rmFavorite(selectedHero)} className="btn btn-danger">Remove from Favorites</button>
            ) : (
              <button onClick={() => addFavorite(selectedHero)} className="btn btn-success">Add to Favorites</button>
            )}
          </div>
        </div>
      )}

      <Outlet context={{ favorites, isFavorite, addFavorite, rmFavorite }} />
    </>
  );
}

export default App;
