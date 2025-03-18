import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character, addFavorite, isFavorite, rmFavorite }) => {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card" key={character.id}>
        <img src={character.image.url} alt={character.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <button onClick={() => navigate(`/character/${character.id}`)} className="btn btn-primary">
            Details
          </button>
          {isFavorite(character) ? (
            <button onClick={() => rmFavorite(character)} className="btn btn-danger mt-2">
              Remove from Favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(character)} className="btn btn-success mt-2">
              Add to Favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

