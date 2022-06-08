import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';

import { Transaction } from '../../models/Transaction';
import api from '../api';

export const useAddTransaction = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    ({
      amount,
      category_id,
      title,
      type,
    }: Omit<Transaction, 'id' | 'created_at' | 'category'>) =>
      api
        .post<Transaction>('/transactions/create', {
          amount,
          category_id,
          title,
          type,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
      onSuccess: () => {
        enqueueSnackbar('Transação adicionada com sucesso.', {
          variant: 'success',
        });
      },
    },
  );
};
