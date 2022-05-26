import { useMutation } from 'react-query';

import api from '../api';

export const useDeleteTransaction = () => {
  return useMutation(
    (id: number) =>
      api.delete(`/transactions/${id}`).then(response => response.data),
    {
      onError: (error: Error) => window.alert(error.message),
      onSuccess: () => window.alert('Transação excluída com sucesso.'),
    },
  );
};
