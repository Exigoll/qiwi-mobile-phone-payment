import {FC, ReactNode} from "react";

import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

type layoutProps = {
  children: ReactNode;
}

const StyledWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper: FC<layoutProps> = ({children}) => {
  return (
    <StyledWrapper>
      <Header/>
      {children}
      <Footer/>
    </StyledWrapper>
  );
}

export default Wrapper;
