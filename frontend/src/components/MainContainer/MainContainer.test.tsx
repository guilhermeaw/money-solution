import { render, screen } from '@testing-library/react';

import { ContainerProps, MainContainer } from '.';

jest.mock('../ContentContainer', () => ({
  ContentContainer: ({ children }: ContainerProps) => (
    <div data-testid="mock-content-container">{children}</div>
  ),
}));

jest.mock('../Header', () => ({
  Header: () => <div data-testid="mock-header" />,
}));

const createComponent = () => {
  return render(
    <MainContainer>
      <div data-testid="mock-children" />
    </MainContainer>,
  );
};

describe('MainContainer component', () => {
  it('should render with Header, ContentContainer and children', () => {
    createComponent();

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-content-container')).toBeInTheDocument();
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
  });
});
