import { MenuItem, TextField, TextFieldProps } from '@mui/material';
import { UseQueryResult } from 'react-query';

import { TransactionCategory } from '../../models/TransactionCategory';

type SelectTransactionCategoryProps = TextFieldProps & {
  query: UseQueryResult<TransactionCategory[], unknown>;
};

export const SelectTransactionCategory = (
  props: SelectTransactionCategoryProps,
) => {
  const {
    query: { data: categories },
  } = props;

  return (
    <TextField
      select
      label="Categoria"
      fullWidth
      size="small"
      margin="dense"
      sx={{ background: '#fff' }}
      {...props}
    >
      {categories?.map(category => (
        <MenuItem key={category.id} value={category.id}>
          {category.title}
        </MenuItem>
      ))}
    </TextField>
  );
};
