import {FC} from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Navbar from "./Navbar";
import PrivateOffice from "./PrivateOffice";

const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  background-color: #fff;
`
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 35px;
  height: 80px;
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo/>
        <Navbar/>
        <PrivateOffice/>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
