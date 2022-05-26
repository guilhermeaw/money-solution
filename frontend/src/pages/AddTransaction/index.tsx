import { ChangeEvent, FormEvent, RefObject, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
import { SelectTransactionCategory } from '../../components/SelectTransactionCategory';
import { TransactionType } from '../../models/Transaction';
import { useAddTransaction } from '../../services/mutations';
import { useFetchTransactionCategories } from '../../services/queries';

const AddTransactionPage = () => {
  const titleInput = useRef(null) as RefObject<HTMLInputElement>;
  const amountInput = useRef(null) as RefObject<HTMLInputElement>;

  const [selectedCategory, setSelectedCategory] = useState('');
  const [transactionType, setTransactionType] = useState(
    TransactionType.INCOME,
  );

  const { mutateAsync: addTransaction } = useAddTransaction();
  const fetchTransactionCategories = useFetchTransactionCategories();
  const navigate = useNavigate();

  const handleSelectCategory = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeTransactionType = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setTransactionType(event.target.value as TransactionType);
  };

  const handleAddTransaction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = titleInput?.current?.value;
    const category_id = Number(selectedCategory);
    const amount = Number(amountInput?.current?.value);

    if (!title || !category_id || !amount) {
      return;
    }

    await addTransaction({
      title,
      category_id,
      amount,
      type: transactionType,
    });

    navigate('/');
  };

  return (
    <MainContainer>
      <Typography variant="h2">Adicionar transação</Typography>
      <Typography variant="subtitle1">
        Adicione uma transação de entrada ou saída
      </Typography>

      <form onSubmit={handleAddTransaction}>
        <TextField
          label="Título"
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          inputRef={titleInput}
          required
          fullWidth
        />

        <SelectTransactionCategory
          value={selectedCategory}
          onChange={handleSelectCategory}
          query={fetchTransactionCategories}
          required
        />

        <FormControl>
          <RadioGroup
            row
            value={transactionType}
            onChange={handleChangeTransactionType}
          >
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Entrada"
            />
            <FormControlLabel
              value="outcome"
              control={<Radio />}
              label="Saída"
            />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Valor"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          inputRef={amountInput}
          required
          fullWidth
        />

        <Button sx={{ marginTop: '0.5rem' }} variant="contained" type="submit">
          Adicionar
        </Button>
      </form>
    </MainContainer>
  );
};

export default AddTransactionPage;
