import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';

import { TransactionCategory } from '../../models/TransactionCategory';
import api from '../api';

export const useAddTransactionCategory = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    ({ title, description }: Omit<TransactionCategory, 'id'>) =>
      api
        .post<TransactionCategory>('/transactions/categories/create', {
          title,
          description,
        })
        .then(response => response.data),
    {
      onError: (error: Error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
      onSuccess: () => {
        enqueueSnackbar('Categoria adicionada com sucesso.', {
          variant: 'success',
        });
      },
    },
  );
};
