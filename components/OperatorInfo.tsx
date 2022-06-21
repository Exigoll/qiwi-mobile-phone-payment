import {FC} from "react";
import styled from "styled-components";
import {operatorType} from "../types";
import Image from "next/image";
import ButtonPrev from "./Buttons/ButtonPrev";

import logo from "../public/img/item-1.png";
import Form from "./Form";
import PrivateOffice from "./PrivateOffice";
import Button from "./Buttons/Button";

type operatorInfoProps = {
  operator: operatorType;
};


const StyledOperatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  max-width: 768px;
  margin: 40px auto;
  padding: 45px 45px 50px;
  color: black;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 14%);
`
const InfoTop = styled.div`
  display: flex;
  align-items: center;
  column-gap: 25px;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 30px;
      font-weight: 900;
      line-height: 30px;
      margin-bottom: 5px;
    }

    h3 {
      color: rgb(0 0 0 / 60%);
      font-size: 14px;
      line-height: 14px;
    }
  }
`
const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 10px 10px 30px;
  border-top: 1px solid rgb(0 0 0 / 8%);


  p {
    padding-bottom: 20px;
  }

  div {
    display: flex;
    column-gap: 30px;
  }

  button {
    font-size: 20px;
    line-height: 20px;
    border-radius: 50px;
    padding: 20px 40px;
  }
`

const OperatorInfo: FC<operatorInfoProps> = ({operator}) => {
  const {title, img} = operator || {};

  if (!operator) {
    return <h3 style={{color: "black"}}>Empty operator</h3>;
  }

  return (
    <StyledOperatorInfo>
      <ButtonPrev/>
      <InfoTop>
        <Image src={logo}
               width={60}
               height={60}
               alt="logo"/>
        <div>
          <h1>Билайн</h1>
          <h3>ПАО «ВымпелКом»</h3>
        </div>
      </InfoTop>
      <Form/>
      <InfoBottom>
        <p>Войдите в кошелек, чтобы совершить платеж</p>
        <div>
          <Button title="Создать кошелек"/>
          <Button title="Войти в кошелек"/>
        </div>
      </InfoBottom>
    </StyledOperatorInfo>
  );
}

export default OperatorInfo;
