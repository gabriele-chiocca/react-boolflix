import { useOutletContext } from 'react-router-dom';
export default function HomePage() {
  const { movies } = useOutletContext();
  return (
    <>
      <div>
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
    </>
  );
}
