import { render, screen } from '@testing-library/react';

import { WithoutTransactions } from '.';

const createComponent = () => {
  return render(<WithoutTransactions />);
};

describe('WithoutTransactions component', () => {
  it('should render correctly', () => {
    const { container } = createComponent();

    expect(
      screen.getByAltText(/Sem transações cadastradas/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Que pena.../i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Parece que você ainda não possui transações cadastradas/i,
      ),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
