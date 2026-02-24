import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function DefaultLayout() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

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

    axios
      .get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: 'cd2a620980eb7bec8a562f62a1cf9b08',
          query: query,
          language: 'it-IT',
        },
      })
      .then((res) => {
        setSeries(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error('Errore ' + error);
      });
  };

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      ></Header>
      <main>
        <div className="mt-3 container">
          <Outlet context={{ movies, series }}></Outlet>
        </div>
      </main>
    </>
  );
}
