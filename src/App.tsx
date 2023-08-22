import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { Layout } from './components/layoutCntainer/Layout';
import { AdminPage } from './pages/adminPage/AdminPage';
import { UserPage } from './pages/userPage/UserPage';
import { Header } from './components/header/Header';

export const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/user');
    }
  }, [pathname, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='admin' element={<AdminPage />} />
          <Route path='user' element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
};
