import { MouseEvent, useState } from 'react';
import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer';
import { TransactionsList } from '../../components/TransactionsList';

const HomePage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleNavigateTo = (navigateUrlSuffix: 'transaction' | 'category') => {
    navigate(`add-${navigateUrlSuffix}`);
  };

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
          onClick={handleOpenMenu}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ height: '2.4rem' }}
        >
          Adicionar
        </Button>

        <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
          <MenuItem onClick={() => handleNavigateTo('transaction')}>
            Transação
          </MenuItem>
          <MenuItem onClick={() => handleNavigateTo('category')}>
            Categoria
          </MenuItem>
        </Menu>
      </Stack>

      <TransactionsList />
    </MainContainer>
  );
};

export default HomePage;
