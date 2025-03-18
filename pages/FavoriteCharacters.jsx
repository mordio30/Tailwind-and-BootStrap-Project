import { useOutletContext } from 'react-router-dom';
import CharacterCard from '../src/components/CharacterCard';

const FavoriteCharacters = () => {
  const { favorites, isFavorite, addFavorite, rmFavorite } = useOutletContext();

  return (
    <div>
      <h2>Your Favorite Superheroes</h2>
      <div className="d-flex flex-wrap">
        {favorites.map((character) => (
          <CharacterCard 
            key={character.id} 
            character={character} 
            isFavorite={isFavorite} 
            addFavorite={addFavorite} 
            rmFavorite={rmFavorite} 
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCharacters;

