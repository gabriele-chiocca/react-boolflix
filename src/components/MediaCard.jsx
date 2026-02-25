import { getFlagUrl } from '../function/flag';

export default function MediaCard({ item, isTv }) {
  const title = isTv ? item.name : item.title;

  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
    : null;

  return (
    <div className="card media-card cardwith">
      {posterUrl ? (
        <img src={posterUrl} alt={title} className="img-fluid card-img-top" />
      ) : (
        <div>
          <span>Non ha copertina</span>
        </div>
      )}

      <div className="media-overlay">
        <h5>{title}</h5>
      </div>
    </div>
  );
}
