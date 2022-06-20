import {FC} from "react";
import styled from "styled-components";

import logo from "../public/svg/logo.svg";
import Image from "next/image";

const StyledLogo = styled.div`
  display: inline;
  cursor: pointer;
`

const Logo: FC = () => {
  return (
    <StyledLogo>
      <Image src={logo}
             width={95}
             height={48}
             alt="Logo"/>
    </StyledLogo>
  );
}

export default Logo;
