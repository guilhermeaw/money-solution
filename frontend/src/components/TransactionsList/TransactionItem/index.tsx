import { Card, Chip, IconButton, Stack, Typography } from '@mui/material';
import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material';

import { Transaction, TransactionType } from '../../../models/Transaction';
import { useDeleteTransaction } from '../../../services/mutations';

export type TransactionItemProps = {
  transaction: Transaction;
};

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { mutateAsync: deleteTransaction } = useDeleteTransaction();

  const handleDeleteTransaction = async (id: number) => {
    await deleteTransaction(id);
  };

  return (
    <Card
      key={transaction.id}
      sx={{ padding: '0.5rem', marginBottom: '0.5rem' }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h3">{transaction.title}</Typography>
            <Chip label={transaction.category.title} size="small" />
          </Stack>
          <Typography
            variant="subtitle1"
            color={
              transaction.type === TransactionType.INCOME ? 'green' : 'red'
            }
          >
            {transaction.amount}
          </Typography>
        </Stack>

        <IconButton
          aria-label="Deletar transação"
          onClick={() => handleDeleteTransaction(transaction.id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Stack>
    </Card>
  );
};
