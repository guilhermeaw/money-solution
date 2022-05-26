import { FormEvent, RefObject, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { useAddTransactionCategory } from '../../services/mutations';

const AddTransactionCategoryPage = () => {
  const titleInput = useRef(null) as RefObject<HTMLInputElement>;
  const descriptionInput = useRef(null) as RefObject<HTMLInputElement>;

  const { mutateAsync: addTransactionCategory } = useAddTransactionCategory();
  const navigate = useNavigate();

  const handleAddTransactionCategory = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const title = titleInput?.current?.value;
    const description = descriptionInput?.current?.value;

    if (!title || !description) {
      return;
    }

    await addTransactionCategory({
      title,
      description,
    });

    navigate('/');
  };

  return (
    <MainContainer>
      <Typography variant="h2">Adicionar categoria</Typography>
      <Typography variant="subtitle1">
        Adicione uma categoria de transação
      </Typography>

      <form onSubmit={handleAddTransactionCategory}>
        <TextField
          label="Título"
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          inputRef={titleInput}
          required
          fullWidth
        />

        <TextField
          label="Descrição"
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          inputRef={descriptionInput}
          required
          fullWidth
          multiline
        />

        <Button sx={{ marginTop: '0.5rem' }} variant="contained" type="submit">
          Adicionar
        </Button>
      </form>
    </MainContainer>
  );
};

export default AddTransactionCategoryPage;
