import { ContentContainer } from '../ContentContainer';
import { Header } from '../Header';

export type ContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: ContainerProps) => (
  <>
    <Header />
    <ContentContainer>{children}</ContentContainer>
  </>
);
