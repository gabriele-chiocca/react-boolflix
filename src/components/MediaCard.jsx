import { getFlagUrl } from '../function/flag';

export default function MediaCard({ item, isTv }) {
  const title = isTv ? item.name : item.title;
  const titleOriginal = isTv ? item.original_name : item.original_title;

  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
    : null;

  const flag = getFlagUrl(item.original_language);

  const stars = Math.max(1, Math.ceil(item.vote_average / 2));
  const fullStars = '★'.repeat(stars);
  const emptyStars = '☆'.repeat(5 - stars);

  return (
    <div className="card media-card cardwith">
      {posterUrl ? (
        <img src={posterUrl} alt={title} className="img-fluid card-img-top" />
      ) : (
        <div className="text-center">
          <span className="media-no-poster text-center">Non ha copertina</span>
        </div>
      )}

      <div className="media-overlay">
        <div>
          <h5>Titolo: {title}</h5>
        </div>
        <div>
          <span>
            <strong>Titolo originale:</strong> {titleOriginal}
          </span>
        </div>
        <div>
          <span>
            Lingua:
            {flag ? (
              <img src={flag} alt={item.original_title} />
            ) : (
              <span>{item.original_language}</span>
            )}
          </span>
        </div>
        <div>
          <span>
            Voto : {fullStars}
            {emptyStars}
          </span>
        </div>
        <div>
          {item.overview ? (
            <span>
              <strong>Overview: </strong>
              {item.overview}
            </span>
          ) : (
            <span>Non è disponibile la descrizione</span>
          )}
        </div>
      </div>
    </div>
  );
}
