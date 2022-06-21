import {FC} from "react";
import styled from "styled-components";

import Button from "./Buttons/Button";

const StyledPrivateOffice = styled.div`
  display: flex;
  column-gap: 25px;
`

const PrivateOffice: FC = () => {
  return (
    <StyledPrivateOffice>
      <Button title="Создать кошелек"/>
      <Button title="Войти"/>
    </StyledPrivateOffice>
  );
}

export default PrivateOffice;
