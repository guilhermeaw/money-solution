import { useMutation } from 'react-query';

import { TransactionCategory } from '../../models/TransactionCategory';
import api from '../api';

export const useAddTransactionCategory = () => {
  return useMutation(
    ({ title, description }: Omit<TransactionCategory, 'id'>) =>
      api
        .post<TransactionCategory>('/transactions/categories/create', {
          title,
          description,
        })
        .then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () => window.alert('Categoria adicionada com sucesso.'),
    },
  );
};
