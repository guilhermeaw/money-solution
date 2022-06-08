import { useSnackbar } from 'notistack';
import { useMutation } from 'react-query';

import api from '../api';

export const useDeleteTransaction = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation(
    (id: number) =>
      api.delete(`/transactions/${id}`).then(response => response.data),
    {
      onError: (error: Error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
        });
      },
      onSuccess: () => {
        enqueueSnackbar('Transação excluída com sucesso.', {
          variant: 'success',
        });
      },
    },
  );
};
