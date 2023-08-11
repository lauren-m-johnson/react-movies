import { useState } from 'react';
import './App.css'
import MovieListPage from '../MovieListPage/MovieListPage';
import LoginPage from '../LoginPage/LoginPage';

export default function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      { user ?
        <MovieListPage />
        :
        <LoginPage />
      }
    </main>
  );
}


