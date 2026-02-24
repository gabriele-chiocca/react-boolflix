import axios from 'axios';
import { useState } from 'react';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'cd2a620980eb7bec8a562f62a1cf9b08',
          query: query,
          language: 'it-IT',
        },
      })
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error('Errore ' + error);
      });
  };

  return (
    <>
      <h1 className="text-center mt-5">Homepage</h1>;
      <div className=" text-center  text-light p-5 bg-primary">
        <h2>Benvenuti offriamo i migliori prodotti di qualità</h2>
      </div>
    </>
  );
}
