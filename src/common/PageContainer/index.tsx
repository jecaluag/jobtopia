import tw from "tailwind-styled-components";
import Navbar from "../Navbar";

const Main = tw.main`bg-dark w-full overflow-hidden`;
const Inner = tw.div`container max-w-screen-lg mx-auto`;
const Content = tw.div`mt-20 px-5 lg:px-0`;

interface Props {
  children: React.ReactNode;
}

const PageContainer = ({ children }: Props): JSX.Element => (
  <Main>
    <Inner>
      <Navbar />
    </Inner>
    <Inner>
      <Content>{children}</Content>
    </Inner>
  </Main>
);

export default PageContainer;
