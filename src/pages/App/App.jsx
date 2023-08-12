import { useState } from 'react';
import './App.css'
import MovieListPage from '../MovieListPage/MovieListPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState({});
  return (
    <main className="App">
      { user ?
      <>
        <NavBar />
        <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </>
      :
      <LoginPage />
      }
    </main>
  );
}


