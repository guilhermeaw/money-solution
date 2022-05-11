import { useQuery } from 'react-query';

import { Transaction } from '../../models/Transaction';
import api from '../api';

export const useFetchMyTransactions = () => {
  return useQuery('myTransactions', () =>
    api.get<Transaction[]>('/transactions/me').then(response => response.data),
  );
};
