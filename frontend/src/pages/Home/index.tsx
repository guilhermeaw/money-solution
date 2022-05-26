import { Button, Stack, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer';
import { TransactionsList } from '../../components/TransactionsList';

const HomePage = () => {
  const navigate = useNavigate();

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

      <TransactionsList />
    </MainContainer>
  );
};

export default HomePage;
