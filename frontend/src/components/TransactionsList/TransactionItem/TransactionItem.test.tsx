import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TransactionItem, TransactionItemProps } from '.';
import { mockTransactions } from '../../../__mocks__';

const mockUseDeleteTransaction = jest.spyOn(
  require('../../../services/mutations/useDeleteTransaction'),
  'useDeleteTransaction',
);

const createComponent = (props: TransactionItemProps) => {
  return render(<TransactionItem {...props} />);
};

describe('TransactionItem component', () => {
  mockUseDeleteTransaction.mockImplementation(() => ({
    useDeleteTransaction: jest.fn(),
  }));

  it('should render with transaction informations', () => {
    const transaction = mockTransactions[0];

    createComponent({ transaction });

    const transactionTitle = screen.getByRole('heading', {
      name: transaction.title,
    });

    const transactionCategory = screen.getByText(transaction.category.title);
    const transactionAmount = screen.getByText(transaction.amount);

    expect(transactionTitle).toBeInTheDocument();
    expect(transactionCategory).toBeInTheDocument();
    expect(transactionAmount).toBeInTheDocument();
  });

  it('should render amount in green if it is of type income', () => {
    const transaction = mockTransactions[0];

    createComponent({ transaction });

    expect(screen.getByText(transaction.amount)).toHaveStyle('color: green');
  });

  it('should render amount in red if it is of type outcome', () => {
    const transaction = mockTransactions[1];

    createComponent({ transaction });

    expect(screen.getByText(transaction.amount)).toHaveStyle('color: red');
  });

  it('should call delete when clicks on trash button', async () => {
    const spyDelete = jest.fn();

    mockUseDeleteTransaction.mockImplementationOnce(() => ({
      mutateAsync: spyDelete,
    }));

    const transaction = mockTransactions[1];

    createComponent({ transaction });

    const deleteButton = screen.getByRole('button', {
      name: /deletar transação/i,
    });

    userEvent.click(deleteButton);

    await waitFor(() => {
      expect(spyDelete).toHaveBeenCalledTimes(1);
      expect(spyDelete).toHaveBeenCalledWith(transaction.id);
    });
  });
});
