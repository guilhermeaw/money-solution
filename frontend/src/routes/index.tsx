import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';

import { useAuth } from '../store/Auth';
import AddTransactionPage from '../pages/AddTransaction';
import AddTransactionCategoryPage from '../pages/AddTransactionCategory';

import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

const AppRoutes = () => (
  <RouteList>
    <Route path="/" element={<HomePage />} />

    <Route path="/add-transaction" element={<AddTransactionPage />} />
    <Route path="/add-category" element={<AddTransactionCategoryPage />} />
  </RouteList>
);

const AuthRoutes = () => (
  <RouteList>
    <Route path="/" element={<LoginPage />} />
  </RouteList>
);

export const Routes = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>{!user ? <AuthRoutes /> : <AppRoutes />}</BrowserRouter>
  );
};
