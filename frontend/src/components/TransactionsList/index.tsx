import { Stack, Typography } from '@mui/material';

import { useFetchMyTransactions } from '../../services/queries';
import { TransactionItem } from './TransactionItem';

export const TransactionsList = () => {
  const { data: transactions, isLoading } = useFetchMyTransactions();

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (!transactions?.length) {
    return (
      <Stack alignItems="center" width="100%" marginTop="1rem">
        <img
          src="/assets/images/no-transactions.svg"
          width="400px"
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
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
};
