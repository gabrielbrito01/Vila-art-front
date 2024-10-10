import { Link } from 'react-router-dom';
import './ArtisanCard.css'; 

const ArtisanCard = ({ artisan }) => {
  return (
    <div className="artisan-card">
      <h3>{artisan.name}</h3>
      <p>{artisan.shortDescription}</p>
      <Link to={`/artisan/${artisan.id}`}>Ver mais</Link>
    </div>
  );
};

export default ArtisanCard;
