import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { Header } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useAuthMock = jest.spyOn(require('../../store/Auth'), 'useAuth');

const createComponent = () => {
  return render(<Header />, { wrapper: MemoryRouter });
};

describe('Header component', () => {
  const mockUser = { id: 1, name: 'John', email: 'john@gmail.com' };

  useAuthMock.mockImplementation(() => ({
    user: mockUser,
    signOut: jest.fn(),
  }));

  it('should render logout button if user is logged in', () => {
    createComponent();

    const logoutButton = screen.getByRole('button', { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
  });

  it('should call signOut if click on logout button', async () => {
    const spySignOut = jest.fn();

    useAuthMock.mockImplementationOnce(() => ({
      user: mockUser,
      signOut: spySignOut,
    }));

    createComponent();

    const logoutButton = screen.getByRole('button', { name: /logout/i });
    userEvent.click(logoutButton);

    await waitFor(() => {
      expect(spySignOut).toHaveBeenCalledTimes(1);
    });
  });

  it('should not render logout button if user is not logged in', () => {
    useAuthMock.mockImplementationOnce(() => ({
      user: null,
      signOut: jest.fn(),
    }));

    createComponent();

    const logoutButton = screen.queryByRole('button', { name: /logout/i });
    expect(logoutButton).not.toBeInTheDocument();
  });
});
