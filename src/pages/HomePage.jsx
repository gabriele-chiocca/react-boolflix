import { useOutletContext } from 'react-router-dom';
import MediaCard from '../components/MediaCard';

export default function HomePage() {
  const { movies, series, hasSearched } = useOutletContext();
  return (
    <>
      <div className="py-5">
        <h1 className="text-light">Film</h1>

        {hasSearched ? (
          <div className="row g-3">
            {movies.map((movie) => (
              <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
                <MediaCard item={movie} isTv={false}></MediaCard>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-light font-body">
              Cerca il film nella barra di ricerca e vedrai qui i risultati
            </p>
          </div>
        )}
      </div>

      <div>
        <h2 className="h1 text-light">Serie</h2>

        {hasSearched ? (
          <div className="row g-3">
            {series.map((serie) => (
              <div className="col-6 col-md-4 col-lg-3" key={serie.id}>
                <MediaCard item={serie} isTv={true}></MediaCard>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-light font-body">
              Cerca la serie nella barra di ricerca e vedrai qui i risultati
            </p>
          </div>
        )}
      </div>
    </>
  );
}
