import {FC} from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import PrivateOffice from "./PrivateOffice";
import Image from "next/image";
import logo from "../public/svg/logo.svg";

const StyledHeader = styled.header`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
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
        <Image src={logo}
               width={95}
               height={48}
               alt="Logo"/>
        <Navbar/>
        <PrivateOffice/>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
