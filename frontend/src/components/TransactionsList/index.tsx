import { Card, IconButton, Stack, Typography } from '@mui/material';
import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material';

import { TransactionType } from '../../models/Transaction';
import { useFetchMyTransactions } from '../../services/queries';
import { useDeleteTransaction } from '../../services/mutations';

export const TransactionsList = () => {
  const { data: transactions, isLoading } = useFetchMyTransactions();
  const { mutateAsync: deleteTransaction } = useDeleteTransaction();

  const handleDeleteTransaction = async (id: number) => {
    await deleteTransaction(id);
  };

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (!transactions?.length) {
    return (
      <Stack alignItems="center" width="100%" marginTop="1rem">
        <img
          src="src/assets/images/no-transactions.svg"
          width="600px"
          alt="Sem transações cadastradas"
        />

        <Typography variant="h2">Que pena...</Typography>
        <Typography variant="subtitle1">
          Parece que você ainda não possui transações cadastradas
        </Typography>
      </Stack>
    );
  }

  return (
    <>
      {transactions.map(transaction => (
        <Card
          key={transaction.id}
          sx={{ padding: '0.5rem', marginBottom: '0.5rem' }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h3">{transaction.title}</Typography>
              <Typography
                variant="subtitle1"
                color={
                  transaction.type === TransactionType.INCOME ? 'green' : 'red'
                }
              >
                {transaction.amount}
              </Typography>
            </Stack>

            <IconButton onClick={() => handleDeleteTransaction(transaction.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Card>
      ))}
    </>
  );
};
