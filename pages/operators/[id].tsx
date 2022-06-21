import {FC} from "react";
import styled from "styled-components";
import {GetServerSideProps} from "next";
import Head from "next/head";

import {operatorType} from "../../types";
import OperatorInfo from "../../components/OperatorInfo";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {id} = context.params;
  const response = await fetch(`https://62b0a2f4e460b79df04a5c80.mockapi.io/operators/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {operator: data},
  };
};

type operatorTypeProps = {
  operator: operatorType;
}

const StyledOperator = styled.div`
  color: #fff;
`

const Operator: FC<operatorTypeProps> = ({operator}) => {
  return (
    <StyledOperator>
      <Head>
        <title>Оператор</title>
      </Head>
      <OperatorInfo operator={operator}/>
    </StyledOperator>
  );
}

export default Operator;
