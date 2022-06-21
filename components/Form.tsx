import {FC} from "react";
import styled from "styled-components";

import Button from "./Buttons/Button";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  button {
    margin-left: 30px;
  }
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  font-size: 13px;
  color: rgb(0 0 0 / 50%);
`
const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 20px;
  border-bottom: 1px solid rgb(0 0 0 / 20%);
  background-color: rgb(0 0 0 / 0%);
  transition: border-color 120ms cubic-bezier(0.4, 0.0, 0.2, 1);

  &::placeholder {
    font-size: 13px;
    font-weight: 300;
    opacity: .5;

  }

  &:focus {
    border-bottom-width: 2px;
    border-bottom-color: rgb(255 140 0);
  }
`

const Form: FC = () => {
  return (
    <StyledForm>
      <Label>
        <Input type="text"
               placeholder="Введите номер телефона"/>
      </Label>
      <Label>
        <Input type="text"
               placeholder="Введите сумму"/>
        <span>Минимум 1 ₽, максимум 1000 ₽ с учетом комиссии</span>
      </Label>
      <Button title="Оплатить"
              type="submit"/>
    </StyledForm>
  );
}

export default Form;
