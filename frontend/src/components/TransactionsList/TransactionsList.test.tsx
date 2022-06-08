import { render, screen } from '@testing-library/react';

import { TransactionsList } from '.';
import { mockTransactions } from '../../__mocks__';

jest.mock('./TransactionItem', () => ({
  TransactionItem: () => <div data-testid="mock-transaction-item" />,
}));

jest.mock('./WithoutTransactions', () => ({
  WithoutTransactions: () => <div data-testid="mock-without-transactions" />,
}));

const mockUseFetchMyTransactions = jest.spyOn(
  require('../../services/queries/useFetchMyTransactions'),
  'useFetchMyTransactions',
);

const createComponent = () => {
  return render(<TransactionsList />);
};

describe('TransactionsList component', () => {
  mockUseFetchMyTransactions.mockImplementationOnce(() => ({
    data: mockTransactions,
  }));

  it('should render with items', () => {
    createComponent();

    expect(screen.getAllByTestId('mock-transaction-item')).toHaveLength(2);
  });

  it('should render WithoutTransactions component if does not have any transaction', () => {
    mockUseFetchMyTransactions.mockImplementationOnce(() => ({
      data: [],
    }));

    createComponent();

    expect(screen.getByTestId('mock-without-transactions')).toBeInTheDocument();
  });

  it('should show loading message if is fetching result', () => {
    mockUseFetchMyTransactions.mockImplementationOnce(() => ({
      isLoading: true,
    }));

    createComponent();

    expect(screen.getByText(/Carregando.../i)).toBeInTheDocument();
  });
});
