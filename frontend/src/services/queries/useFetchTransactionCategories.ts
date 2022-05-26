import { useQuery } from 'react-query';

import { TransactionCategory } from '../../models/TransactionCategory';
import api from '../api';

export const useFetchTransactionCategories = () => {
  return useQuery('transactionCategories', () =>
    api
      .get<TransactionCategory[]>('/transactions/categories/list')
      .then(response => response.data),
  );
};
