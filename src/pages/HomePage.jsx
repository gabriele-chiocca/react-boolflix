import { useOutletContext } from 'react-router-dom';
import { getFlagUrl } from '../function/flag';

export default function HomePage() {
  const { movies, series } = useOutletContext();
  return (
    <>
      <div>
        <h1>Film</h1>
        <ul>
          {movies.map((movie) => {
            const flag = getFlagUrl(movie.original_language);
            const posterUrl = movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : null;

            const stars = Math.ceil(movie.vote_average / 2);
            const fullStars = '★'.repeat(stars);
            const emptyStars = '☆'.repeat(5 - stars);

            return (
              <li key={movie.id}>
                {posterUrl ? (
                  <img src={posterUrl} alt={movie.title}></img>
                ) : (
                  <div>
                    <span>No poster</span>
                  </div>
                )}
                <div>
                  <span>Titolo:{movie.title}</span>
                </div>
                <div>
                  <span>Titolo originale:{movie.original_title}</span>
                </div>
                <div>
                  <span>
                    Lingua:
                    {flag ? (
                      <img src={flag} alt={movie.original_title} />
                    ) : (
                      <span>{movie.original_language}</span>
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    Voto: {fullStars}
                    {emptyStars}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h2 className="h1">Serie</h2>
        <ul>
          {series.map((serie) => {
            const flag = getFlagUrl(serie.original_language);
            const seriesUrl = serie.poster_path
              ? `https://image.tmdb.org/t/p/w342${serie.poster_path}`
              : null;

            const stars = Math.ceil(serie.vote_average / 2);
            const fullStars = '★'.repeat(stars);
            const emptyStars = '☆'.repeat(5 - stars);
            return (
              <li key={serie.id}>
                {seriesUrl ? (
                  <img src={seriesUrl} alt={serie.name} />
                ) : (
                  <div>
                    <span>Non vi è il poster</span>
                  </div>
                )}
                <div>
                  <span>Titolo:{serie.name}</span>
                </div>
                <div>
                  <span>Titolo originale:{serie.original_name}</span>
                </div>
                <div>
                  <span>
                    Lingua:
                    {flag ? (
                      <img src={flag} alt={serie.original_name} />
                    ) : (
                      <span>{serie.original_language}</span>
                    )}
                  </span>
                </div>
                <div>
                  <span>
                    Voto: {fullStars}
                    {emptyStars}{' '}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
