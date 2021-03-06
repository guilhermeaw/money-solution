import { useSnackbar } from 'notistack';
import { useQuery } from 'react-query';

import { TransactionCategory } from '../../models/TransactionCategory';
import api from '../api';

export const useFetchTransactionCategories = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(
    'transactionCategories',
    () =>
      api
        .get<TransactionCategory[]>('/transactions/categories/list')
        .then(response => response.data),
    {
      onError: (error: Error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
    },
  );
};
