import { Button, Card, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer';
import { TransactionType } from '../../models/Transaction';
import { useFetchMyTransactions } from '../../services/queries';
import { formatCurrency } from '../../utils/formatCurrency';

const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetchMyTransactions();

  const handleAddTransaction = () => {
    navigate('/add-transaction');
  };

  return (
    <MainContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Typography variant="h2">Minhas transações</Typography>
          <Typography sx={{ marginBottom: '1rem' }} variant="subtitle1">
            Aqui você encontra uma listagem de todas as suas transações
          </Typography>
        </Stack>

        <Button
          variant="contained"
          onClick={handleAddTransaction}
          sx={{ height: '2.5rem' }}
        >
          Adicionar
        </Button>
      </Stack>

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
              {formatCurrency(Number(transaction.amount))}
            </Typography>
          </Card>
        ))
      )}
    </MainContainer>
  );
};

export default HomePage;
