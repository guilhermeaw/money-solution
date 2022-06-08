import { Stack, Typography } from '@mui/material';

export const WithoutTransactions = () => {
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
};
