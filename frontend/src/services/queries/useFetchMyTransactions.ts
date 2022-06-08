import { useSnackbar } from 'notistack';
import { useQuery } from 'react-query';

import { Transaction } from '../../models/Transaction';
import api from '../api';

export const useFetchMyTransactions = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useQuery(
    'myTransactions',
    () =>
      api
        .get<Transaction[]>('/transactions/me')
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
