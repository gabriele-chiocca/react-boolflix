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
            return (
              <li key={movie.id}>
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
                  <span>Voto:{movie.vote_average}</span>
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
            return (
              <li key={serie.id}>
                <div>
                  <span>Titolo:{serie.name}</span>
                </div>
                <div>
                  <span>Titolo originale:{serie.origina_name}</span>
                </div>
                <div>
                  <span>
                    Lingua:
                    {flag ? (
                      <img src={flag} alt={serie.original_title} />
                    ) : (
                      <span>{serie.original_language}</span>
                    )}
                  </span>
                </div>
                <div>
                  <span>Voto:{serie.vote_average}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
