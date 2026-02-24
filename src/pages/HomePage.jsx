import { useOutletContext } from 'react-router-dom';
export default function HomePage() {
  const { movies, series } = useOutletContext();
  return (
    <>
      <div>
        <h1>Film</h1>
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <div>
                  <span>Titolo:{movie.title}</span>
                </div>
                <div>
                  <span>Titolo originale:{movie.original_title}</span>
                </div>
                <div>
                  <span>Lingua:{movie.original_language}</span>
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
            return (
              <li key={serie.id}>
                <div>
                  <span>Titolo:{serie.name}</span>
                </div>
                <div>
                  <span>Titolo originale:{serie.origina_name}</span>
                </div>
                <div>
                  <span>Lingua:{serie.original_language}</span>
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
