import { Typography } from '@mui/material';

import { useFetchMyTransactions } from '../../services/queries';
import { TransactionItem } from './TransactionItem';
import { WithoutTransactions } from './WithoutTransactions';

export const TransactionsList = () => {
  const { data: transactions, isLoading } = useFetchMyTransactions();

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  if (!transactions?.length) {
    return <WithoutTransactions />;
  }

  return (
    <>
      {transactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
};
