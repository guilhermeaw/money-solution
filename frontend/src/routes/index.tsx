import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom';
import AddTransactionPage from '../pages/AddTransaction';

import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';

export const Routes = () => (
  <BrowserRouter>
    <RouteList>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/add-transaction" element={<AddTransactionPage />} />
    </RouteList>
  </BrowserRouter>
);
