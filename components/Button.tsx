import {FC} from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  font-size: 14px;
  line-height: 14px;
  padding: 15px 25px;
  border: 1px solid rgb(220 220 220 / 70%);
  border-radius: 25px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: #FF8C00;
    color: #fff;
    border: 1px solid transparent;
  }

  &:active {
    background-color: #d56e00;
  }

  .active {
    background-color: #FF8C00;
    color: #fff;
    border: 1px solid transparent;
  }
`

const Button: FC = ({title}) => {
  return (
    <StyledButton>
      {title}
    </StyledButton>
  );
}

export default Button;
