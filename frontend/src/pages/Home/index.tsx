import { Card, Typography } from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { TransactionType } from '../../models/Transaction';
import { useFetchMyTransactions } from '../../services/queries';

const HomePage = () => {
  const { data, isLoading } = useFetchMyTransactions();

  return (
    <MainContainer>
      <Typography variant="h2">Minhas transações</Typography>
      <Typography sx={{ marginBottom: '1rem' }} variant="subtitle1">
        Aqui você encontra uma listagem de todas as suas transações
      </Typography>

      {isLoading ? (
        <Typography>Carregando...</Typography>
      ) : (
        data?.map(transaction => (
          <Card
            key={transaction.id}
            sx={{ padding: '0.5rem', marginBottom: '0.5rem' }}
          >
            <Typography variant="h3">{transaction.title}</Typography>
            <Typography
              variant="subtitle1"
              color={
                transaction.type === TransactionType.INCOME ? 'green' : 'red'
              }
            >
              {Number(transaction.amount).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Typography>
          </Card>
        ))
      )}
    </MainContainer>
  );
};

export default HomePage;
